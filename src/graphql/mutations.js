/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGoods = /* GraphQL */ `
  mutation CreateGoods(
    $input: CreateGoodsInput!
    $condition: ModelGoodsConditionInput
  ) {
    createGoods(input: $input, condition: $condition) {
      id
      Name
      ListedDate
      Price
      Location
      Contact
      Holder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGoods = /* GraphQL */ `
  mutation UpdateGoods(
    $input: UpdateGoodsInput!
    $condition: ModelGoodsConditionInput
  ) {
    updateGoods(input: $input, condition: $condition) {
      id
      Name
      ListedDate
      Price
      Location
      Contact
      Holder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGoods = /* GraphQL */ `
  mutation DeleteGoods(
    $input: DeleteGoodsInput!
    $condition: ModelGoodsConditionInput
  ) {
    deleteGoods(input: $input, condition: $condition) {
      id
      Name
      ListedDate
      Price
      Location
      Contact
      Holder
      createdAt
      updatedAt
      __typename
    }
  }
`;
