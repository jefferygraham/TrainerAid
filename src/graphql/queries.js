/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      image
      type
      title
      description
      setting1
      setting2
      regularPrice
      salesPrice
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listTrainers = /* GraphQL */ `
  query ListTrainers(
    $filter: ModelTrainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        description
        setting1
        setting2
        regularPrice
        salesPrice
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
