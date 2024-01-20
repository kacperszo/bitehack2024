const User = require("../../../models/User");
const {isEmail} = require("validator");
const utils = require("../../../utils");
const bcrypt = require("bcrypt");
const auth = require("../../../auth");

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
        await context.authGuard();

        try {
            await auth.deleteTokens(context.req);

            return 'success';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },
}