import {ApolloClient, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const authLink = setContext((_, { headers }) => {
  const cookies = document.cookie;

  return {
    headers: {
      ...headers,
      "Cookie": cookies
    },
  };
});

const uploadLink = createUploadLink({
  uri: 'localhost:8001/graphql',
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