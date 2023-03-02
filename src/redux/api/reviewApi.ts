import { emptyApi } from "./emptyApi";

const extendedReviewApi = emptyApi
  .enhanceEndpoints({ addTagTypes: ["Reviews"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllReviews: builder.query({
        query: (id) => `reviews/${id}`,
        providesTags: ["Reviews"],
      }),

      createReview: builder.mutation({
        query: (body) => ({
          url: "reviews/",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Reviews"],
      }),
    }),
  });

export const { useCreateReviewMutation, useGetAllReviewsQuery } =
  extendedReviewApi;