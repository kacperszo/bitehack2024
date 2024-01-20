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

    type SubscriptionLog {
        id: ID!
        subscriptionId: ID!
        content: String!
        createdAt: DateTime
        updatedAt: DateTime

        subscription: Subscription!
    }

    type SubscriptionLogPagination {
        paginator: Paginator!
        data: [SubscriptionLog]!
    }

    type SubscriptionPlan {
        id: ID!
        name: String!
        description: String!
        monthlyPrice: Float!
        annualPrice: Float!
        groupsLimit: Int!
        createdAt: DateTime
        updatedAt: DateTime

        subscriptions: [Subscription]
    }

    type SubscriptionPlanPagination {
        paginator: Paginator!
        data: [SubscriptionPlan]!
    }

    type CurrentPlan {
        name: String!
        period: String!
        addOns: String
        annualLimit: Int#! NA RAZIE NIE WYMAGANE ALE BEDZIE WYMAGANE
        subscriptionId: Int
        subscriptionStatus: String
        expirationAt: DateTime
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

    type CredentialTemplate {
        id: ID!
        name: String!
        content: JSON!
        clientId: Int!
        previewSrc: String!
        createdAt: DateTime
        updatedAt: DateTime

        groups: [Group]
        variables: [Variable]
        images: [Image]!
        client: Client!
    }

    type CredentialTemplatePagination {
        paginator: Paginator!
        data: [CredentialTemplate]!
    }

    type BadgeTemplate {
        id: ID!
        name: String!
        content: JSON!
        clientId: ID!
        previewSrc: String!
        createdAt: DateTime
        updatedAt: DateTime

        groups: [Group]
        images: [Image]!
        client: Client!
    }

    type BadgeTemplatePagination {
        paginator: Paginator!
        data: [BadgeTemplate]!
    }

    type CompanySearchResult {
        id: ID!
        regon: String
        nip: String
        statusNip: String
        name: String
        address: String
        type: String
        endDate: String
    }

    type Variable {
        id: ID!
        clientId: ID
        category: String!
        name: String!
        tag: String!
        parent: String!
        type: String!
        addedBy: String!
        createdAt: DateTime
        updatedAt: DateTime

        value: String

        client: Client
        credentialTemplates: CredentialTemplate!
        credentials: Credential
    }

    type VariablePagination {
        paginator: Paginator!
        data: [Variable]!
    }

    type EmailTemplate {
        id: ID!
        clientId: ID!
        name: String!
        content: JSON!
        #previewSrc: String!
        createdAt: DateTime
        updatedAt: DateTime

        groups: [Group!]!
        #images: [Image]!
        client: Client!
    }

    type EmailTemplatePagination {
        paginator: Paginator!
        data: [EmailTemplate]!
    }

    type ClientVerification {
        id: ID!
        clientId: ID!
        fullName: String!
        address: String!
        taxNumber: String
        regon: String
        krs: String
        status: String
        createdAt: DateTime
        updatedAt: DateTime

        client: Client!
    }

    type ClientVerificationPagination {
        paginator: Paginator!
        data: [ClientVerification]!
    }

    type Invoice {
        clientId: ID!
        subscriptionId: ID!
        number: String!
        value: Float!
        file: String!
        paidAt: DateTime
        paymentAt: DateTime
        createdAt: DateTime
        updatedAt: DateTime

        subscription: Subscription
    }

    type InvoicePagination {
        paginator: Paginator!
        data: [Invoice]!
    }

    type DiscountCode {
        id: ID!
        stripeCouponId: String!
        code: String!
        value: Int!
        uses: Int!
        maxUses: Int
        activationAt: DateTime!
        expiresAt: DateTime
        createdAt: DateTime
        updatedAt: DateTime

        subscriptions: [Subscription]
    }

    type DiscountCodePagination {
        paginator: Paginator!
        data: [DiscountCode]!
    }

    type Image {
        id: ID!
        clientId: ID!
        name: String!
        src: String!
        createdAt: DateTime
        updatedAt: DateTime

        credentialTemplate: CredentialTemplate
        badgeTemplate: BadgeTemplate
        emailTemplate: EmailTemplate
        client: Client!
    }

    type ImagePagination {
        paginator: Paginator!
        data: [Image]!
    }

    type Addon {
        id: ID!
        name: String!
        monthlyPrice: Float!
        annualPrice: Float!
        createdAt: DateTime
        updatedAt: DateTime
    }

    type AddonPagination {
        paginator: Paginator!
        data: [Addon]!
    }

    input PaginatedQueryInput {
        page: Int!
        limit: Int!
        orderBy: OrderBy!
    }

    input SignUpInput {
        fullName: String!
        displayName: String!
        email: String!
        password: String!
        phone: String!
    }

    input SignUpToWalletInput {
        displayName: String!
        email: String!
        password: String!
        phone: String
    }

    input SignInInput {
        email: String!
        password: String!
    }

    input ServerInput {
        name: String!
        clientId: ID!
        ipAddress: String!
        url: String!
        apiKey: String!
    }

    input UpdateServerInput {
        id: ID!
        name: String
        clientId: ID
        ipAddress: String
        url: String
        apiKey: String
    }

    input SocialLinkObjectInput {
        name: String!
        url: String!
    }

    input ClientInput {
        stripeCustomerId: ID
        fullName: String!
        address: String!
        taxNumber: String
        regon: String
        krs: String
        description: String
        contactEmail: String!
        contactPhone: String!
        socialLinks: [SocialLinkObjectInput]
        verifiedAt: DateTime
        brandName: String
        linkedinId: ID
    }

    input UpdateClientInput {
        id: ID!
        #stripeCustomerId: ID
        fullName: String
        #address: String
        description: String
        contactEmail: String
        contactPhone: String
        socialLinks: [SocialLinkObjectInput]
        #verifiedAt: DateTime
        brandName: String
        linkedinId: ID
    }

    input UserInput {
        clientId: ID!
        email: String!
        password: String!
        displayName: String!
        phone: String
        photoUrl: String
        lang: String
        permissions: String!
    }

    input UpdateUserInput {
        id: ID!
        displayName: String
        phone: String
        photoUrl: Upload
        lang: String
        type: String
        email: String
        permissions: String
    }

    input GroupInput {
        name: String!
        url: String
        description: String
        clientId: ID
        credentialTemplateId: ID!
        badgeTemplateId: ID
        emailTemplateId: ID
        numMonthsValid: Int
    }

    input GroupFilterInput {
        id: ID
        name: String
        url: String
        description: String
        clientId: ID
        credentialTemplateId: ID
        badgeTemplateId: ID
        emailTemplateId: ID
    }

    input UpdateGroupInput {
        id: ID!
        name: String
        url: String
        description: String
        clientId: ID
        credentialTemplateId: ID
        badgeTemplateId: ID
        emailTemplateId: ID
        numMonthsValid: Int
    }

    input CredentialFilterInput {
        id: ID
        uuid: String
        name: String
        email: String
        phone: String
        address: String
        groupId: ID
        createdAt: DateTime
        updatedAt: DateTime
    }

    input UpdateCredentialInput {
        id: ID!
        name: String
        email: String
        phone: String
        address: String
        certificateFileUrl: String
        badgeFileUrl: String
        statusPublished: Boolean
        statusEmail: Boolean
        statusCredential: Boolean
        statusEngagement: Boolean
        action: String
        publishedAt: DateTime
    }

    input UpdateCredentialsInput {
        ids: [ID!]
        action: String!
    }

    input SubscriptionInput {
        planId: ID!
        clientId: ID
        userId: ID
        period: String!
        discountCode: String
        annualLimit: Int!
        addons: String
    }

    input UpdateSubscriptionInput {
        id: ID!
        #planId: ID
        #clientId: ID
        #userId: ID
        action: String
        #monthlyPrice: Float
        #annualPrice: Float
        #nextMonthlyPrice: Float
        #nextAnnualPrice: Float
        #paymentStatus: String
    }

    input UpdateSubscriptionByAdminInput {
        id: ID!
        planId: ID!
        clientId: ID
        userId: ID
        status: String!
        period: String!
        paymentStatus: String!
        annualLimit: Int!
        addons: String
        expirationAt: DateTime!
        paidAt: DateTime
        #monthlyPrice: Float
        #annualPrice: Float
        #nextMonthlyPrice: Float
        #nextAnnualPrice: Float
    }

    input UpgradeSubscriptionInput {
        planId: ID!
        discountCode: String
        annualLimit: Int!
        addons: String
    }

    input SubscriptionByAdminInput {
        planId: ID!
        clientId: ID
        userId: ID
        period: String!
        annualLimit: Int!
        addons: String
        status: String!
        paymentStatus: String!
        expirationAt: DateTime!
        paidAt: DateTime
        #monthlyPrice: Float
        #annualPrice: Float
        #nextMonthlyPrice: Float
        #nextAnnualPrice: Float
    }

    input SubscriptionPlanInput {
        name: String!
        description: String!
        monthlyPrice: Float!
        annualPrice: Float!
        groupsLimit: Int!
    }

    input UpdateSubscriptionPlanInput {
        id: ID!
        name: String
        description: String
        monthlyPrice: Float
        annualPrice: Float
        groupsLimit: Int
    }

    input AddUserToClientInput {
        clientId: ID!
        email: String!
        displayName: String!
        phone: String
        type: String!
    }

    input CredentialTemplateInput {
        name: String!
        content: JSON!
        #clientId: ID
        previewSrc: Upload!
    }

    input UpdateCredentialTemplateInput {
        id: ID!
        name: String
        content: JSON
        #clientId: ID
        previewSrc: Upload
    }

    input BadgeTemplateInput {
        name: String!
        content: JSON!
        #clientId: ID
        previewSrc: Upload!
    }

    input UpdateBadgeTemplateInput {
        id: ID!
        name: String
        content: JSON
        #clientId: ID
        previewSrc: Upload
    }

    input CredentialRecipientVariable {
        tag: String!
        value: String!
    }

    input CredentialRecipient {
        name: String!
        email: String!
        variables: [CredentialRecipientVariable!]
    }

    input CredentialInput {
        groupId: ID!
        recipients: [CredentialRecipient!]!
        action: String
        publishedAt: DateTime
    }

    input VariableInput {
        clientId: ID
        category: String
        name: String!
        tag: String!
        parent: String
        type: String
    }

    input UpdateVariableInput {
        id: ID!
        category: String
        name: String
        tag: String
        parent: String
        type: String
        actions: String!
    }

    union GlobalCredentialOrCredential = GlobalCredential | Credential

    input ClientVerificationInput {
        clientId: ID
        fullName: String!
        address: String!
        taxNumber: String!
        regon: String
        krs: String
    }

    input UpdateClientVerificationInput {
        id: ID!
        status: String
        fullName: String
        address: String
        taxNumber: String
        regon: String
        krs: String
    }

    input InvoiceInput {
        subscriptionId: ID!
        number: String!
        value: Float!
        file: String!
        paidAt: DateTime
        paymentAt: DateTime
        createdAt: DateTime
        updatedAt: DateTime
    }

    input UpdateInvoiceInput {
        id: ID!
        subscriptionId: ID
        number: String
        value: Float
        file: String
        paidAt: DateTime
        paymentAt: DateTime
    }

    input DiscountCodeInput {
        code: String!
        value: Int!
        uses: Int!
        maxUses: Int
        activationAt: DateTime!
        expiresAt: DateTime
    }

    input UpdateDiscountCodeInput {
        id: ID!
        code: String
        value: Int
        uses: Int
        maxUses: Int
        activationAt: DateTime
        expiresAt: DateTime
    }

    input CredentialLogInput {
        credentialId: ID!
        title: String!
    }

    input UpdateCredentialLogInput {
        credentialId: ID!
        title: String!
    }

    input CredentialEngagementInput {
        credentialId: ID
        title: String
    }

    input UpdateCredentialEngagementInput {
        credentialId: ID
        title: String
    }

    input EmailTemplateInput {
        name: String!
        content: JSON!
        #clientId: ID
        #previewSrc: Upload!
    }

    input UpdateEmailTemplateInput {
        id: ID!
        name: String
        content: JSON
        #clientId: ID
        #previewSrc: Upload
    }

    input ImageInput {
        clientId: ID
        templateId: ID
        type: String!
        file: Upload!
    }

    input UpdateImageInput {
        id: ID!
        clientId: ID
        name: String
        templateId: ID
        type: String!
        file: Upload
    }

    input AddonInput {
        name: String!
        monthlyPrice: Float!
        annualPrice: Float!
    }

    input UpdateAddonInput {
        id: ID!
        name: String
        monthlyPrice: Float
        annualPrice: Float
    }

    input UpdateClientEmailSettings {
        clientId: ID
        senderName: String
        senderEmail: String
        cc: String
        bcc: String
        replyTo: String
        primaryColor: String
        logoUrl: Upload
    }

    type Query {
        clients(input: PaginatedQueryInput!, filterBy: String): ClientPagination
        client(id: ID!): Client

        credentials(input: PaginatedQueryInput!, filterBy: String): CredentialPagination
        credential(id: ID!): Credential

        globalCredentials(input: PaginatedQueryInput!, filterBy: String): GlobalCredentialPagination
        globalCredential(uuid: String): Credential

        groups(input: PaginatedQueryInput!, filterBy: String): GroupPagination
        group(id: ID!): Group

        roles(input: PaginatedQueryInput!, filterBy: String): RolePagination
        role(id: ID!): Role

        servers(input: PaginatedQueryInput!, filterBy: String): ServerPagination
        server(id: ID!): Server

        subscriptions(input: PaginatedQueryInput!, filterBy: String): SubscriptionPagination
        subscription(id: ID!): Subscription

        subscriptionPlans(input: PaginatedQueryInput!, filterBy: String): SubscriptionPlanPagination
        subscriptionPlan(id: ID!): SubscriptionPlan

        users(input: PaginatedQueryInput!, filterBy: String): UserPagination
        user(id: ID): User

        credentialTemplates(input: PaginatedQueryInput!, filterBy: String): CredentialTemplatePagination
        credentialTemplate(id: ID!): CredentialTemplate
        myAndDefaultCredentialTemplates(input: PaginatedQueryInput!, filterBy: String): CredentialTemplatePagination

        badgeTemplates(input: PaginatedQueryInput!, filterBy: String): BadgeTemplatePagination
        badgeTemplate(id: ID!): BadgeTemplate
        myAndDefaultBadgeTemplates(input: PaginatedQueryInput!, filterBy: String): BadgeTemplatePagination

        emailTemplates(input: PaginatedQueryInput!, filterBy: String): EmailTemplatePagination
        emailTemplate(id: ID!): EmailTemplate
        #myAndDefaultEmailTemplates(input: PaginatedQueryInput!): EmailTemplatePagination

        variables(input: PaginatedQueryInput!, filterBy: String): VariablePagination
        myVariables(input: PaginatedQueryInput!, filterBy: String): VariablePagination
        variable(id: ID!): Variable

        clientVerifications(input: PaginatedQueryInput!, filterBy: String): ClientVerificationPagination
        clientVerification(id: ID!): ClientVerification

        #invoices(input: PaginatedQueryInput!, filterBy: String): InvoicePagination
        #invoice(id: ID!): Invoice

        discountCodes(input: PaginatedQueryInput!, filterBy: String): DiscountCodePagination
        discountCode(id: ID!): DiscountCode
        searchDiscountCode(code: String!): DiscountCode

        credentialLogs(input: PaginatedQueryInput!, filterBy: String): CredentialLogPagination
        credentialLog(id: ID!): CredentialLog

        credentialEngagements(input: PaginatedQueryInput!, filterBy: String): CredentialEngagementPagination
        credentialEngagement(id: ID!): CredentialEngagement

        images(input: PaginatedQueryInput!, filterBy: String): ImagePagination
        image(id: ID!): Image

        addons(input: PaginatedQueryInput!, filterBy: String): AddonPagination
        addon(id: ID!): Addon
    }

    type Mutation {
        getUniqueGlobalCredentialUuid(email: String!): String!
        sharedTo(id: String!, platform: String!): CredentialEngagement!
        findByNip(nip: String!): CompanySearchResult!

        addUserToClient(input: AddUserToClientInput!): User!

        signIn(input: SignInInput!): User!
        signInByGoogle: String
        signUp(input: SignUpInput!): User!
        signUpToWallet(input: SignUpToWalletInput!): User!
        signOut: String!
        verify(code: String!): EmailVerification!
        generateOtp: User!
        verifyOtp(token: String!): User!
        validateOtp(token: String!): User!
        disableOtp: User!

        changeEmail(newEmail: String!): EmailVerification!
        cancelEmailChange: String!
        resendRegisterEmailVerification(email: String!): EmailVerification!
        changePassword(password: String!, newPassword: String!): User!
        forgotPassword(email: String!): String!
        resetPassword(code: String!, password: String!, confirmPassword: String!): String!

        createClient(input: ClientInput!): Client!
        updateClient(input: UpdateClientInput!): Client!
        deleteClient(id: ID!): String!

        updateClientEmailSettings(input: UpdateClientEmailSettings!): ClientEmailSettings!

        createClientVerification(input: ClientVerificationInput!): ClientVerification!
        updateClientVerification(input: UpdateClientVerificationInput!): ClientVerification!
        deleteClientVerification(id: ID!): String!
        deleteClientVerifications(ids: [ID!]): String!

        #createInvoice(input: InvoiceInput!): Invoice!
        #updateInvoice(input: UpdateInvoiceInput!): Invoice!
        #deleteInvoice(id: ID!): String!

        createCredential(input: CredentialInput!): [Credential!]!
        updateCredential(input: UpdateCredentialInput!): Credential!
        updateCredentials(input: UpdateCredentialsInput!): [Credential!]
        deleteCredential(id: ID!): String!
        deleteCredentials(ids: [ID!]): String!

        createCredentialLog(input: CredentialLogInput!): [CredentialLog!]!
        updateCredentialLog(input: UpdateCredentialLogInput!): CredentialLog!
        deleteCredentialLog(id: ID!): String!

        createCredentialEngagement(input: CredentialEngagementInput!): [CredentialEngagement!]!
        updateCredentialEngagement(input: UpdateCredentialEngagementInput!): CredentialEngagement!
        deleteCredentialEngagement(id: ID!): String!

        createGroup(input: GroupInput!): Group!
        updateGroup(input: UpdateGroupInput!): Group!
        deleteGroup(id: ID!): String!

        createServer(input: ServerInput!): Server!
        updateServer(input: UpdateServerInput!): Server!
        deleteServer(id: ID!): String!

        createSubscription(input: SubscriptionInput!): String!
        createSubscriptionByAdmin(input: SubscriptionByAdminInput!): Subscription!
        updateSubscription(input: UpdateSubscriptionInput!): Subscription!
        updateSubscriptionByAdmin(input: UpdateSubscriptionByAdminInput!): Subscription!
        upgradeSubscription(input: UpgradeSubscriptionInput!): String!
        deleteSubscription(id: ID!): String!
        deleteSubscriptions(ids: [ID!]): String!
        #increaseAnnualLimit(newAnnualLimit: Int!): String!

        createSubscriptionPlan(input: SubscriptionPlanInput!): SubscriptionPlan!
        updateSubscriptionPlan(input: UpdateSubscriptionPlanInput!): SubscriptionPlan!
        deleteSubscriptionPlan(id: ID!): String!

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
