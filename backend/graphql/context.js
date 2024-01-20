const {GraphQLError} = require("graphql/index");
const auth = require("../auth");

module.exports = {
  context: async ({req, res}) => {
    const {user, authTokens} = await auth.getUser(req, res);

    const guestGuard = () => {
      if (user) {
        throw new GraphQLError('Already authenticated.', {
          extensions: {
            code: 'BAD REQUEST',
            http: {status: 400},
          },
        });
      }
    }

    const authGuard = async (withMfa = true, withPasswordChange = true) => {
      if (!user) {
        throw new GraphQLError('Unauthenticated.', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: {status: 401},
          },
        });
      }
    }
    return {
      req,
      res,
      user,
      userAuthTokens: authTokens,
      authGuard,
      guestGuard,
    };
  },
}