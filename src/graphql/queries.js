/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGoods = /* GraphQL */ `
  query GetGoods($id: ID!) {
    getGoods(id: $id) {
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
export const listGoods = /* GraphQL */ `
  query ListGoods(
    $filter: ModelGoodsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
