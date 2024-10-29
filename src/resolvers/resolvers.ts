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
        console.log("ERROR : ", error);
      }
    },
    product: async (_: any, { id }: { id: string }) => {
      try {
        const { body } = await got(`${BASE_URL}/products/${id}`);
        const response = JSON.parse(body);
        return response;
      } catch (error) {
        console.log("ERROR : ", error);
      }
    },
    categories: async () => {
      try {
        const { body } = await got(`${BASE_URL}/products/categories`);
        const response = JSON.parse(body);
        return response;
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
    productsByCategory: async (_: any, { category }: { category: string }) => {
      try {
        const { body } = await got(`${BASE_URL}/products/category/${category}`);
        const response = JSON.parse(body);
        return response;
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
  Mutation: {
    addProduct: async (
      _: any,
      args: {
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }
    ) => {
      try {
        const response = await got.post(`${BASE_URL}/products`, {
          json: {
            ...args,
          },
          responseType: "json",
        });

        const productData = response.body;

        if (!productData || !productData.title) {
          throw new Error("Invalid product data returned from API");
        }

        return productData;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to add product");
      }
    },
    updateProduct: async (
      _: any,
      args: {
        id: string;
        title?: string;
        price?: number;
        description?: string;
        category?: string;
        image?: string;
      }
    ) => {
      try {
        const response = await got.patch(`${BASE_URL}/products/${args.id}`, {
          json: {
            ...args,
          },
          responseType: "json",
        });

        const productData = response.body;

        if (!productData) {
          throw new Error("Invalid product data returned from API");
        }

        return productData;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to update product");
      }
    },
    deleteProduct: async (
      _: any,
      args: {
        id: string;
      }
    ) => {
      try {
        const response = await got.delete(`${BASE_URL}/products/${args.id}`);

        const productData = JSON.parse(response.body);

        if (!productData || !productData.id) {
          throw new Error("Product not found in the response");
        }

        return productData;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to update product");
      }
    },
  },
};
