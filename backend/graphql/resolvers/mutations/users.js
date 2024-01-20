const User = require("../../../models/User");

module.exports = {
    createUser: async (_, { input }, context) => {
        await context.authGuard();

        try {
            await context.user.can('createUser');

            input.id = parseInt(input.id);

            if (!['addict', 'non-addict', 'psychiatrist'].includes(input.type)) {
                throw new Error('Validation failed. Uknown Type.')
            }

            return (await User.query().insert(input));
        } catch (error) {
            return utils.throwGraphqlError(error);
        }
    },

    deleteUserAuthToken: async (_, { userId, id }, context) => {
        await context.authGuard();

        try {
            const user = await User.query().findById(parseInt(userId));

            if (!user) {
                throw new Error('Not found.');
            }

            await user.checkPolicy('update', context.user);

            const authToken = await UserAuthTokens.query().findById(parseInt(id));

            if (!authToken) {
                throw new Error('Not found.');
            }

            await authToken.$query().delete();

            return user;
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },

    deleteUser: async (_, { id }, context) => {
        await context.authGuard();

        try {
            const user = await User.query().findById(id);

            if (!user) {
                throw new Error('Not found.');
            }

            await user.checkPolicy('delete', context.user);

            return (await user.$query().delete()) ? 'success' : 'fail';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },
}