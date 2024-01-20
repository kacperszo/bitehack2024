module.exports = {
  Mutation: {
    ...require('./mutations/auth'),
    ...require('./mutations/users'),
    ...require('./mutations/journalEntries'),
    ...require('./mutations/helpArticles'),
    ...require('./mutations/usersGroups')
  },
}