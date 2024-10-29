export const schema = `
  type Product {
    id: ID!
    title: String!
    price: Float!
    description: String!
    category: String!
    image: String!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;
