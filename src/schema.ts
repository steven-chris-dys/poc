export const schema = `#graphql
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
    categories: [String]
    productsByCategory(category: String!): [Product]
  }

  type Mutation {
    addProduct(title: String!, price: Float!, description: String!, category: String!, image: String): Product
    updateProduct(id: ID!, title: String, price: Float, description: String, category: String, image: String): Product
    deleteProduct(id: ID!): Product
  }
`;
