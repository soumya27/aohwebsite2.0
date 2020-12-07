/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFooterLink = /* GraphQL */ `
  query GetFooterLink($id: ID!) {
    getFooterLink(id: $id) {
      id
      title
      action
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFooterLinks = /* GraphQL */ `
  query ListFooterLinks(
    $filter: ModelFooterLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFooterLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        action
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
export const syncFooterLinks = /* GraphQL */ `
  query SyncFooterLinks(
    $filter: ModelFooterLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFooterLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        action
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
