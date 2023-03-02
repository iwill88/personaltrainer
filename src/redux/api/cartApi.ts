import { emptyApi } from "./emptyApi";
import { Ebook } from "../../types";

type Item = {
  item: Ebook;
  quantity: Number;
  total: Number;
  id: String;
};

interface Cart {
  owner: String;
  items: Item[];
  subTotal: Number;
  totalQty: Number;
}

type prepareHeaders = (
  headers: Headers,
  api: {
    getState: () => unknown;
    extra: unknown;
    endpoint: string;
    type: "query" | "mutation";
    forced: boolean | undefined;
  }
) => Headers | void;

const extendedCartApi = emptyApi
  .enhanceEndpoints({ addTagTypes: ["Cart"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      createPayment: builder.mutation({
        query: (body) => ({
          url: "/payments",
          method: "POST",
          body,
        }),
      }),
      getCart: builder.query<Cart, void>({
        query: () => "/cart",
        providesTags: ["Cart"],
      }),
      addProductToCart: builder.mutation({
        query: (body) => ({
          url: `/cart`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["Cart"],
      }),
      updateProductCart: builder.mutation({
        query: ({ id, value }) => ({
          url: `/cart/${id}?value=${value}`,
          method: "PUT",
        }),
        invalidatesTags: ["Cart"],
      }),
      clearCart: builder.mutation({
        query: () => ({
          url: `/cart`,
          method: "DELETE",
        }),
        invalidatesTags: ["Cart"],
      }),
      removeFromCart: builder.mutation({
        query: (id: any) => ({
          url: `cart/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Cart"],
      }),
    }),
  });

export const {
  useCreatePaymentMutation,
  useGetCartQuery,
  useAddProductToCartMutation,
  useUpdateProductCartMutation,
  useClearCartMutation,
  useRemoveFromCartMutation,
} = extendedCartApi;