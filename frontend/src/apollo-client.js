import {ApolloClient, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {graphqlUrl} from "./config";

const authLink = setContext((_, {headers}) => {
    const cookies = document.cookie;
    return {
        uri: graphqlUrl,
        headers: {
            ...headers,
            "Cookie": cookies,
        },
    };
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink,
    credentials: "include",
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
        query: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
    },
});

export default client;