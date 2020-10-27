import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  me: User;
};


export type QueryCustomerArgs = {
  id: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  name: Scalars['String'];
  organizationNumber: Scalars['Int'];
  customerNumber: Scalars['Int'];
  externalId: Scalars['String'];
  email: Scalars['String'];
  invoiceEmail?: Maybe<Scalars['String']>;
  overdueNoticeEmail?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberMobile?: Maybe<Scalars['String']>;
  /** Defaults to EMAIL */
  invoiceSendMethod?: Maybe<Scalars['String']>;
  postalAddress: Address;
  physicalAddress?: Maybe<Address>;
  /** Defined in days. Eg. 10 days. */
  invoicesDueIn?: Maybe<Scalars['Int']>;
};

export type Address = {
  __typename?: 'Address';
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  sub: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};

export type CustomerInput = {
  name: Scalars['String'];
  organizationNumber: Scalars['Int'];
  email: Scalars['String'];
  invoiceEmail?: Maybe<Scalars['String']>;
  overdueNoticeEmail?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberMobile?: Maybe<Scalars['String']>;
  /** Defaults to EMAIL */
  invoiceSendMethod?: Maybe<Scalars['String']>;
  postalAddress: AddressInput;
  physicalAddress?: Maybe<AddressInput>;
  /** Defined in days. Eg. 10 days. */
  invoicesDueIn?: Maybe<Scalars['Int']>;
};

export type AddressInput = {
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = (
  { __typename?: 'Query' }
  & { customers: Array<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'name'>
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'sub'>
  ) }
);


export const GetCustomersDocument = gql`
    query GetCustomers {
  customers {
    id
    name
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  me {
    sub
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    