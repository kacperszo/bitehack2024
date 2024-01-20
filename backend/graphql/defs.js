const gql = require("graphql-tag");

module.exports = gql`
    #directive @auth on FIELD_DEFINITION
    scalar DateTime
    scalar JSON

    type Paginator {
        currentPage: Int!
        perPage: Int!
        count: Int!
        total: Int!
    }

    input PaginatedQueryInput {
        page: Int!
        limit: Int!
        orderBy: OrderBy!
    }

    input OrderBy {
        order: String!
        orderBy: String!
    }

    type User {
        id: ID!
        email: String!
        password: String!
        displayName: String!
        createdAt: DateTime
        updatedAt: DateTime

        authTokens: [UserAuthTokens]
    }

    type UserPagination {
        paginator: Paginator!
        data: [User]!
    }

    type UserAuthTokens {
        id: ID!
        userId: ID!
        accessToken: String!
        refreshToken: String!
        device: String!
        ipAddress: String!
        lastActive: DateTime!
        createdAt: DateTime
        updatedAt: DateTime

        user: User
    }

    type UserAuthTokensPagination {
        paginator: Paginator!
        data: [UserAuthTokens]!
    }

    type Query {
        users(input: PaginatedQueryInput!, filterBy: String): UserPagination
        user(id: ID): User
    }

    type Mutation {
        #signIn(input: SignInInput!): User!
        #signUp(input: SignUpInput!): User!
        signOut: String!
        #changeEmail(newEmail: String!): EmailVerification!
        #cancelEmailChange: String!
        #resendRegisterEmailVerification(email: String!): EmailVerification!
        #changePassword(password: String!, newPassword: String!): User!
        #forgotPassword(email: String!): String!
        #resetPassword(code: String!, password: String!, confirmPassword: String!): String!

        #reateUser(input: UserInput!): User!
        #updateUser(input: UpdateUserInput!): User!
        #deleteUser(id: ID!): String!
        #deleteUserAuthToken(userId: ID!, id: ID!): User!
    }

`;
