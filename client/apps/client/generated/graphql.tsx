import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  info: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  registeredAt: Scalars['String'];
  username: Scalars['String'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, username: string, registeredAt: string } | null> | null };

export type AllUsernamesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsernamesQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username: string } | null> | null };


export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    username
    registeredAt
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const AllUsernamesDocument = gql`
    query allUsernames {
  users {
    username
  }
}
    `;

/**
 * __useAllUsernamesQuery__
 *
 * To run a query within a React component, call `useAllUsernamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsernamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsernamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsernamesQuery(baseOptions?: Apollo.QueryHookOptions<AllUsernamesQuery, AllUsernamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsernamesQuery, AllUsernamesQueryVariables>(AllUsernamesDocument, options);
      }
export function useAllUsernamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsernamesQuery, AllUsernamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsernamesQuery, AllUsernamesQueryVariables>(AllUsernamesDocument, options);
        }
export type AllUsernamesQueryHookResult = ReturnType<typeof useAllUsernamesQuery>;
export type AllUsernamesLazyQueryHookResult = ReturnType<typeof useAllUsernamesLazyQuery>;
export type AllUsernamesQueryResult = Apollo.QueryResult<AllUsernamesQuery, AllUsernamesQueryVariables>;