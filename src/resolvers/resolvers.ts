import got from "got";
const BASE_URL = "https://fakestoreapi.com";

export const resolvers = {
  Query: {
    products: async () => {
      try {
        const { body } = await got(`${BASE_URL}/products`);
        const response = JSON.parse(body);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    product: async (_: any, { id }: { id: string }) => {
      try {
        const { body } = await got(`${BASE_URL}/products/${id}`);
        const response = JSON.parse(body);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      {
        title,
        price,
        description,
        category,
        image,
      }: {
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }
    ) => {
      try {
        const { body } = await got(`${BASE_URL}/products`);
        console.log("body-----------------", body);
        return body;
        return body;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to add product");
      }
    },
  },
};
