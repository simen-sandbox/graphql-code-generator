import React, { FC } from 'react';
import { useAuth } from 'oidc-react';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  ApolloProvider as OriginalApolloProvider,
  createHttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
// import { onError } from 'apollo-link-error';

const uri = process.env.REACT_APP_BACKEND_URL;
if (!uri) throw new Error(`REACT_APP_BACKEND_URL is not defined`);

export const ApolloProvider: FC = ({ children }) => {
  const auth = useAuth();
  let accessToken = auth?.userData?.id_token;

  const httpLink = createHttpLink({
    uri,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }));

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: ApolloLink.from([
      // onError(({ graphQLErrors, networkError }) => {
      //   if (graphQLErrors) {
      //     graphQLErrors.forEach(({ message, locations, path }) =>
      //       // eslint-disable-next-line no-console
      //       console.error(
      //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      //       ),
      //     );
      //   }
      //   if (networkError) {
      //     // eslint-disable-next-line no-console
      //     console.error(`[Network error]: ${networkError}`);
      //   }
      // }),
      authLink.concat(httpLink),
    ]),
    cache,
  });

  return (
    <OriginalApolloProvider client={client}>{children}</OriginalApolloProvider>
  );
};
