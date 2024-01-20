module.exports = {
  Mutation: {
    ...require('./mutations/auth'),
    ...require('./mutations/users'),
  },
}