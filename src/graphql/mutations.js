/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsArticles = /* GraphQL */ `
  mutation CreateNewsArticles(
    $input: CreateNewsArticlesInput!
    $condition: ModelNewsArticlesConditionInput
  ) {
    createNewsArticles(input: $input, condition: $condition) {
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
export const updateNewsArticles = /* GraphQL */ `
  mutation UpdateNewsArticles(
    $input: UpdateNewsArticlesInput!
    $condition: ModelNewsArticlesConditionInput
  ) {
    updateNewsArticles(input: $input, condition: $condition) {
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
export const deleteNewsArticles = /* GraphQL */ `
  mutation DeleteNewsArticles(
    $input: DeleteNewsArticlesInput!
    $condition: ModelNewsArticlesConditionInput
  ) {
    deleteNewsArticles(input: $input, condition: $condition) {
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
