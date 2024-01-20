module.exports = {
    signUp: async (_, {
      input: {
        fullName,
        displayName,
        email,
        password,
        phone,
      }
    }, context) => {
      context.guestGuard();
  
      try {
        if (!fullName || !displayName || !email || !password || !phone) {
          throw new Error('Validation failed.');
        }
  
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
          throw new Error('Password validation failed.');
        }
  
        const user = await User.query().findOne({email: email});
        if (user) {
          throw new Error('User with that email already exists.');
        }
  
        const customer = await stripe.customers.create({
          name: fullName,
          email: email,
          phone: phone
        })
        
        const newClient = await Client.query().insert({
          fullName: fullName,
          contactEmail: email,
          contactPhone: phone,
          stripeCustomerId: customer.id
        });
  
        const newUser = await User.query().insert({
          displayName,
          email,
          password,
          clientId: newClient.id,
          phone
        });
  
        const role = await Role.query().findOne({name: 'ClientAdministrator'});
        await newUser.$relatedQuery('roles').relate(role);
  
        const code = (await EmailVerification.query().insert({
          userId: newUser.id
        })).code;
        await new Email(newUser).sendEmailVerification(`${FRONTEND_HOST}/auth/verify/${code}`);
  
        return newUser;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    signIn: async (_, {input: {email, password}}, context) => {
      context.guestGuard();
  
      try {
        if (!email || !password) {
          throw new Error('Validation failed.');
        }
  
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!isEmail(email) || !passwordRegex.test(password)) {
          throw new Error('Incorrect email and/or password.');
        }
  
        const user = await User.query().findOne({email: email});
  
        if (!user) {
          throw new Error('Incorrect email and/or password.');
        }
  
        if (!user.emailVerifiedAt) {
          throw new Error('Account email not verified.');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          throw new Error('Incorrect email and/or password.');
        }
  
        //generate tokens
        await auth.generateTokens(context.req, context.res, user);
  
        return user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    signOut: async (_, {}, context) => {
      await context.authGuard(false, false);
  
      try {
        await auth.deleteTokens(context.req);
  
        return 'success';
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    verify: async (_, {code}, context) => {
      try {
        const emailVerification = await EmailVerification.query().findOne({code});
  
        if (!emailVerification) {
          throw new Error('Invalid verification code.');
        }
  
        if (moment().diff(moment(emailVerification.createdAt), 'minutes') >= 20) {
          await emailVerification.$query().delete();
          throw new Error('Invalid verification code.');
        }
  
        const user = await emailVerification.$relatedQuery('user');
  
        if (emailVerification.type) {
          const newEmail = emailVerification.type.split('-')[1];
  
          if (emailVerification.type.startsWith('emailChangeConfirmation')) {
            const newCode = (await EmailVerification.query().insert({
              userId: user.id,
              type: `changeToNew-${newEmail}`,
            })).code;
        
            await new Email(user).sendChangeEmail(`${FRONTEND_HOST}/auth/verify/${newCode}`);
  
            await emailVerification.$query().delete();
          } else if (emailVerification.type.startsWith('changeToNew')) {
            await user.$query().patch({email: newEmail});
  
            await emailVerification.$query().delete();
          }
        } else {
          await user.$query().patch({emailVerifiedAt: moment().format('YYYY-MM-DD HH:mm:ss')});
  
          await emailVerification.$query().delete();
        }
  
        return emailVerification;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    changeEmail: async (_, {newEmail}, context) => {
      context.authGuard();
  
      try {
        const emailVerification = await EmailVerification.query().findOne({userId: context.user.id})
          .where('type', 'like', '%emailChangeConfirmation%')
          .orWhere('type', 'like', '%changeToNew%');
  
        if (emailVerification && emailVerification.type) {
          throw new Error('Email change is already being processed.');
        }
  
        const newEmailVerification = await EmailVerification.query().insert({
          userId: parseInt(context.user.id),
          type: `emailChangeConfirmation-${newEmail}`
        });
        await new Email(context.user).sendChangeEmail(`${FRONTEND_HOST}/auth/verify/${newEmailVerification.code}`);
  
        return newEmailVerification;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    cancelEmailChange: async (_, {}, context) => {
      context.authGuard();
  
      try {
        await EmailVerification.query()
        .delete()
        .where('type', 'like', '%emailChangeConfirmation%')
        .orWhere('type', 'like', '%changeToNew%');
        //tu powinno być chyba jeszcze jakies context.user.id w warunku 
        return 'success';
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    changePassword: async (_, {password, newPassword}, context) => {
      context.authGuard(true, false);
  
      try {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(newPassword)) {
          throw new Error('Incorrect new password.');
        }
  
        if (!context.user.requiredPasswordChange) {
          if (!(await bcrypt.compare(password, context.user.password))) {
            throw new Error('Incorrect password.');
          }
        }
  
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        context.user = await context.user.$query().patchAndFetch(context.user.requiredPasswordChange ? {
          password: hashedPassword,
          requiredPasswordChange: false
        } : {password: hashedPassword});
  
        await auth.generateTokens(context.req, context.res, context.user, context.userAuthTokens);
  
        return context.user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    forgotPassword: async (_, {email}) => {
      try {
        const user = await User.query().findOne({email});
  
        if (!user) {
          throw new Error('Not found.');
        }
  
        const emailVerification = await EmailVerification.query().findOne({userId: user.id}).where('type', 'like', '%forgotPassword%');
  
        if (emailVerification) {
          throw new Error('Password reset is already being processed.');
        }
  
        const code = (await EmailVerification.query().insert({userId: user.id, type: 'forgotPassword'})).code;
        await new Email({email}).sendForgotPassword(`${FRONTEND_HOST}/auth/verify/${code}`);
  
        return 'success';
      } catch(error) {
        utils.throwGraphqlError(error);
      }
    },
  
    resetPassword: async (_, {code, password, confirmPassword}) => {
      try {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match.');
        }
  
        const emailVerification = await EmailVerification.query().findOne({code});
  
        if (!emailVerification) {
          throw new Error('Not found.');
        }
  
        if (moment().diff(moment(emailVerification.createdAt), 'minutes') > 20) {
          await emailVerification.$query().delete();
          throw new Error('Expired.')
        }
  
        const userId = emailVerification.userId;
        const hashedPassword = await bcrypt.hash(password, 12);
  
        await emailVerification.$query().delete();
        await User.query().findById(userId).patch({password: hashedPassword});
  
        return 'success';
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    generateOtp: async (_, {}, context) => {
      context.authGuard();
  
      try {
        const base32Secret = utils.generateRandomBase32();
        const totp = new OtpAuth.TOTP({
          issuer: OTP_ISSUER,
          label: context.user.displayName,
          algorithm: 'SHA1',
          digits: 6,
          period: 15,
          secret: base32Secret
        });
        const otpAuthUrl = totp.toString();
  
        await context.user.$query().patchAndFetch({otpAuthUrl, otpBase32: base32Secret});
  
        return context.user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    verifyOtp: async (_, {token}, context) => {
      context.authGuard();
  
      try {
        const totp = new OtpAuth.TOTP({
          issuer: OTP_ISSUER,
          label: context.user.displayName,
          algorithm: 'SHA1',
          digits: 6,
          period: 15,
          secret: context.user.otpBase32
        });
  
        const delta = totp.validate({token});
        if (delta === null) {
          throw new Error('Invalid token.');
        }
  
        await context.user.$query().patchAndFetch({otpEnabled: true})
  
        return context.user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    validateOtp: async (_, {token}, context) => {
      context.authGuard(false, false);
  
      try {
        const totp = new OtpAuth.TOTP({
          issuer: OTP_ISSUER,
          label: context.user.displayName,
          algorithm: 'SHA1',
          digits: 6,
          period: 15,
          secret: context.user.otpBase32
        });
  
        const delta = totp.validate({token, window: 1});
  
        if (delta === null) {
          throw new Error('Invalid token.');
        }
  
        await context.userAuthTokens.$query().patchAndFetch({mfaVerified: true});
  
        return context.user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    disableOtp: async (_, {userId}, context) => {
      try {
        if (userId) {
          const user = User.query().findById(userId);
  
          if (!user) {
            throw new Error('Not found.');
          }
  
          await user.checkPolicy('update', context.user);
        }
  
        await context.user.$query().patchAndFetch({otpEnabled: false});
  
        return context.user;
      } catch (error) {
        utils.throwGraphqlError(error);
      }
    },
  
    signInByGoogle: async () => {
      passport.authenticate("google", { scope: ["email", "profile"] });
      return 'success';
    }
  }