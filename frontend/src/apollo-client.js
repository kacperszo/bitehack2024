import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {graphqlUrl} from "./config";
import {createUploadLink} from "apollo-upload-client";
import i18n from "i18next";

const authLink = setContext((_, { headers }) => {
  const cookies = document.cookie;

  const locale = i18n?.language || 'en';

  return {
    headers: {
      ...headers,
      "Cookie": cookies,
      "X-Lang": locale
    },
  };
});

const uploadLink = createUploadLink({
  uri: graphqlUrl,
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink),
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