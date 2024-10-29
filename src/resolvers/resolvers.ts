import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const resolvers = {
  Query: {
    products: async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/products`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    product: async (_: any, { id }: { id: string }) => {
      try {
        const { data } = await axios.get(`${BASE_URL}/products/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
