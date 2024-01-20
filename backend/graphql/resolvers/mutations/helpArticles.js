const utils = require("../../../utils");
const HelpArticle = require("../../../models/HelpArticle");

module.exports = {
    createHelpArticle: async (_, { input }, context) => {
        await context.authGuard();

        try {
            return await HelpArticle.query().insert(input);
        } catch (error) {
            return utils.throwGraphqlError(error);
        }
    },

    deleteHelpArticle: async (_, { id }, context) => {
        await context.authGuard();

        try {
            const helpArticle = await HelpArticle.query().findById(id);

            if (!helpArticle) {
                throw new Error('Not found.');
            }

            return (await helpArticle.$query().delete()) ? 'success' : 'fail';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },
}