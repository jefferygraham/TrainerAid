/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrainer = /* GraphQL */ `
  mutation CreateTrainer(
    $input: CreateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    createTrainer(input: $input, condition: $condition) {
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
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $input: UpdateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    updateTrainer(input: $input, condition: $condition) {
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
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $input: DeleteTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    deleteTrainer(input: $input, condition: $condition) {
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
