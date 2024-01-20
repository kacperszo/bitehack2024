const utils = require("../../../utils");
const UsersGroup = require("../../../models/UsersGroup");

module.exports = {
    createUsersGroup: async (_, { input }, context) => {
        await context.authGuard();

        try {
            return await UsersGroup.query().insert(input);
        } catch (error) {
            return utils.throwGraphqlError(error);
        }
    },

    deleteHelpArticle: async (_, { id }, context) => {
        await context.authGuard();

        try {
            const usersGroup = await UsersGroup.query().findById(id);

            if (!usersGroup) {
                throw new Error('Not found.');
            }

            return (await usersGroup.$query().delete()) ? 'success' : 'fail';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },
}