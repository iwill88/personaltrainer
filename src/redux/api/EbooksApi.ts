import { emptyApi } from "./emptyApi";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  img: string;
  rating: number;
}

const extendedEbooksApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEbooks: builder.query<Product[], void>({
      query: () => "/products/",
    }),
    getSingleEbook: builder.query<Product, string | undefined>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetAllEbooksQuery, useGetSingleEbookQuery } =
  extendedEbooksApi;
