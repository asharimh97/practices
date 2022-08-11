import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { BACKEND_URL } from "../constants/api";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${BACKEND_URL}/graphql`
  }),
  // uri: `${BACKEND_URL}/graphql`
})

export default client;