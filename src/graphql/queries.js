/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsArticles = /* GraphQL */ `
  query GetNewsArticles($id: ID!) {
    getNewsArticles(id: $id) {
      id
      title
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listNewsArticless = /* GraphQL */ `
  query ListNewsArticless(
    $filter: ModelNewsArticlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsArticless(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNewsArticles = /* GraphQL */ `
  query SyncNewsArticles(
    $filter: ModelNewsArticlesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsArticles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
