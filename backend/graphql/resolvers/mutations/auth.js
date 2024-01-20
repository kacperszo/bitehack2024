const User = require("../../../models/User");
const { isEmail } = require("validator");

module.exports = {
    signUp: async (_, {
        input: {
            displayName,
            email,
            password,
            type
        }
    }, context) => {
        context.guestGuard();

        try {
            if (!displayName || !email || !password || !type) {
                throw new Error('Validation failed.');
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordRegex.test(password)) {
                throw new Error('Password validation failed.');
            }

            const user = await User.query().findOne({ email: email });
            if (user) {
                throw new Error('User with that email already exists.');
            }

            const newUser = await User.query().insert({
                email,
                displayName,
                password,
                type
            });

            return newUser;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    signIn: async (_, { input: { email, password } }, context) => {
        context.guestGuard();

        try {
            if (!email || !password) {
                throw new Error('Validation failed.');
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!isEmail(email) || !passwordRegex.test(password)) {
                throw new Error('Incorrect email and/or password.');
            }

            const user = await User.query().findOne({ email: email });

            if (!user) {
                throw new Error('Incorrect email and/or password.');
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

    signOut: async (_, { }, context) => {
        await context.authGuard(false, false);

        try {
            await auth.deleteTokens(context.req);

            return 'success';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    changePassword: async (_, { password, newPassword }, context) => {
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
            } : { password: hashedPassword });

            await auth.generateTokens(context.req, context.res, context.user, context.userAuthTokens);

            return context.user;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    generateOtp: async (_, { }, context) => {
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

            await context.user.$query().patchAndFetch({ otpAuthUrl, otpBase32: base32Secret });

            return context.user;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    verifyOtp: async (_, { token }, context) => {
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

            const delta = totp.validate({ token });
            if (delta === null) {
                throw new Error('Invalid token.');
            }

            await context.user.$query().patchAndFetch({ otpEnabled: true })

            return context.user;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    validateOtp: async (_, { token }, context) => {
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

            const delta = totp.validate({ token, window: 1 });

            if (delta === null) {
                throw new Error('Invalid token.');
            }

            await context.userAuthTokens.$query().patchAndFetch({ mfaVerified: true });

            return context.user;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    disableOtp: async (_, { userId }, context) => {
        try {
            if (userId) {
                const user = User.query().findById(userId);

                if (!user) {
                    throw new Error('Not found.');
                }

                await user.checkPolicy('update', context.user);
            }

            await context.user.$query().patchAndFetch({ otpEnabled: false });

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