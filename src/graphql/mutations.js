/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHeaderName = /* GraphQL */ `
  mutation CreateHeaderName(
    $input: CreateHeaderNameInput!
    $condition: ModelHeaderNameConditionInput
  ) {
    createHeaderName(input: $input, condition: $condition) {
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
export const updateHeaderName = /* GraphQL */ `
  mutation UpdateHeaderName(
    $input: UpdateHeaderNameInput!
    $condition: ModelHeaderNameConditionInput
  ) {
    updateHeaderName(input: $input, condition: $condition) {
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
export const deleteHeaderName = /* GraphQL */ `
  mutation DeleteHeaderName(
    $input: DeleteHeaderNameInput!
    $condition: ModelHeaderNameConditionInput
  ) {
    deleteHeaderName(input: $input, condition: $condition) {
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
export const createHeaderOption = /* GraphQL */ `
  mutation CreateHeaderOption(
    $input: CreateHeaderOptionInput!
    $condition: ModelHeaderOptionConditionInput
  ) {
    createHeaderOption(input: $input, condition: $condition) {
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
export const updateHeaderOption = /* GraphQL */ `
  mutation UpdateHeaderOption(
    $input: UpdateHeaderOptionInput!
    $condition: ModelHeaderOptionConditionInput
  ) {
    updateHeaderOption(input: $input, condition: $condition) {
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
export const deleteHeaderOption = /* GraphQL */ `
  mutation DeleteHeaderOption(
    $input: DeleteHeaderOptionInput!
    $condition: ModelHeaderOptionConditionInput
  ) {
    deleteHeaderOption(input: $input, condition: $condition) {
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
export const createFooterLink = /* GraphQL */ `
  mutation CreateFooterLink(
    $input: CreateFooterLinkInput!
    $condition: ModelFooterLinkConditionInput
  ) {
    createFooterLink(input: $input, condition: $condition) {
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
export const updateFooterLink = /* GraphQL */ `
  mutation UpdateFooterLink(
    $input: UpdateFooterLinkInput!
    $condition: ModelFooterLinkConditionInput
  ) {
    updateFooterLink(input: $input, condition: $condition) {
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
export const deleteFooterLink = /* GraphQL */ `
  mutation DeleteFooterLink(
    $input: DeleteFooterLinkInput!
    $condition: ModelFooterLinkConditionInput
  ) {
    deleteFooterLink(input: $input, condition: $condition) {
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
export const createNewsArticle = /* GraphQL */ `
  mutation CreateNewsArticle(
    $input: CreateNewsArticleInput!
    $condition: ModelNewsArticleConditionInput
  ) {
    createNewsArticle(input: $input, condition: $condition) {
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
export const updateNewsArticle = /* GraphQL */ `
  mutation UpdateNewsArticle(
    $input: UpdateNewsArticleInput!
    $condition: ModelNewsArticleConditionInput
  ) {
    updateNewsArticle(input: $input, condition: $condition) {
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
export const deleteNewsArticle = /* GraphQL */ `
  mutation DeleteNewsArticle(
    $input: DeleteNewsArticleInput!
    $condition: ModelNewsArticleConditionInput
  ) {
    deleteNewsArticle(input: $input, condition: $condition) {
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
