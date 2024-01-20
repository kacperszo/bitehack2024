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

    input OrderBy {
        order: String!
        orderBy: String!
    }

    type User {
        id: ID!
        email: String!
        password: String!
        displayName: String!
        phone: String
        photoUrl: String
        lang: String!
        clientId: ID
        emailVerifiedAt: DateTime
        requiredPasswordChange: Boolean
        createdAt: DateTime
        updatedAt: DateTime

        otpEnabled: Boolean
        otpBase32: String
        otpAuthUrl: String

        currentPlan: CurrentPlan

        roles: [Role]
        client: Client
        emailVerifications: [EmailVerification]
        authTokens: [UserAuthTokens]
        permissions: [Permission]
        subscriptions: [Subscription]
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
        mfaVerified: Boolean
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

    type DiscountCodePagination {
        paginator: Paginator!

    type Query {
        users(input: PaginatedQueryInput!, filterBy: String): UserPagination
        user(id: ID): User    }

    type Mutation {
        signIn(input: SignInInput!): User!
        signInByGoogle: String
        signUp(input: SignUpInput!): User!
        signUpToWallet(input: SignUpToWalletInput!): User!
        signOut: String!
        changeEmail(newEmail: String!): EmailVerification!
        cancelEmailChange: String!
        resendRegisterEmailVerification(email: String!): EmailVerification!
        changePassword(password: String!, newPassword: String!): User!
        forgotPassword(email: String!): String!
        resetPassword(code: String!, password: String!, confirmPassword: String!): String!
        
        createUser(input: UserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        deleteUser(id: ID!): String!
        deleteUserAvatar(id: ID!): User!
        deleteUserAuthToken(userId: ID!, id: ID!): User!
        updateUserPermissions(id: ID!, newPermissions: String!): User!

        createCredentialTemplate(input: CredentialTemplateInput!): CredentialTemplate!
        updateCredentialTemplate(input: UpdateCredentialTemplateInput!): CredentialTemplate!
        deleteCredentialTemplate(id: ID!): String!

        createBadgeTemplate(input: BadgeTemplateInput!): BadgeTemplate!
        updateBadgeTemplate(input: UpdateBadgeTemplateInput!): BadgeTemplate!
        deleteBadgeTemplate(id: ID!): String!

        createEmailTemplate(input: EmailTemplateInput!): EmailTemplate!
        updateEmailTemplate(input: UpdateEmailTemplateInput!): EmailTemplate!
        sendTestEmailTemplate(id: ID!): String!
        deleteEmailTemplate(id: ID!): String!

        createVariable(input: VariableInput!): Variable!
        updateVariable(input: UpdateVariableInput!): Variable!
        deleteVariable(id: ID!): String!

        createDiscountCode(input: DiscountCodeInput!): DiscountCode!
        updateDiscountCode(input: UpdateDiscountCodeInput!): DiscountCode!
        deleteDiscountCode(id: ID!): String!

        createImage(input: ImageInput!): Image!
        updateImage(input: UpdateImageInput!): Image!
        deleteImage(id: ID!): String!

        createAddon(input: AddonInput!): Addon!
        updateAddon(input: UpdateAddonInput!): Addon!
        deleteAddon(id: ID!): String!
    }

`;
