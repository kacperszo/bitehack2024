const JournalEntry = require("../../../models/JournalEntry");
const utils = require("../../../utils");

module.exports = {
    createJournalEntry: async (_, { input }, context) => {
        await context.authGuard();

        try {
            return await JournalEntry.query().insert(input);
        } catch (error) {
            return utils.throwGraphqlError(error);
        }
    },

    deleteJournalEntry: async (_, { id }, context) => {
        await context.authGuard();

        try {
            const journalEntry = await JournalEntry.query().findById(id);

            if (!journalEntry) {
                throw new Error('Not found.');
            }

            return (await journalEntry.$query().delete()) ? 'success' : 'fail';
        } catch (error) {
            utils.throwGraphqlError(error);
        }
    },
}