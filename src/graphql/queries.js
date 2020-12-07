/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeaderName = /* GraphQL */ `
  query GetHeaderName($id: ID!) {
    getHeaderName(id: $id) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      HeaderOptions {
        nextToken
        startedAt
      }
    }
  }
`;
export const listHeaderNames = /* GraphQL */ `
  query ListHeaderNames(
    $filter: ModelHeaderNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeaderNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
export const syncHeaderNames = /* GraphQL */ `
  query SyncHeaderNames(
    $filter: ModelHeaderNameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHeaderNames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
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
export const getHeaderOption = /* GraphQL */ `
  query GetHeaderOption($id: ID!) {
    getHeaderOption(id: $id) {
      id
      title
      action
      options
      isOwner
      headernameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHeaderOptions = /* GraphQL */ `
  query ListHeaderOptions(
    $filter: ModelHeaderOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeaderOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        action
        options
        isOwner
        headernameID
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
export const syncHeaderOptions = /* GraphQL */ `
  query SyncHeaderOptions(
    $filter: ModelHeaderOptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHeaderOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        action
        options
        isOwner
        headernameID
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
export const getNewsArticle = /* GraphQL */ `
  query GetNewsArticle($id: ID!) {
    getNewsArticle(id: $id) {
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
export const listNewsArticles = /* GraphQL */ `
  query ListNewsArticles(
    $filter: ModelNewsArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    $filter: ModelNewsArticleFilterInput
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
