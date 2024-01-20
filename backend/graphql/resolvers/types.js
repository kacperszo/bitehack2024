module.exports = {
  UserAuthTokens: {
    user: async (model) => {
      return model.$relatedQuery("user");
    },
  },
  User: {
    authTokens: async (model) => {
      return model.$relatedQuery("authTokens");
    },
  }

}