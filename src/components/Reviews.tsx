import { Rating } from "@mui/material";
import { useParams } from "react-router";

import { useGetAllReviewsQuery } from "../redux/api/reviewApi";
import ReviewModal from "./ReviewModal";

const Reviews = () => {
  const { ebookId } = useParams();
  console.log(ebookId);
  const { data: dataReviews, error } = useGetAllReviewsQuery(ebookId);

  console.log(dataReviews?.data, error);

  return (
    <section className="col-span-4 ">
      <div className="mb-10 md:px-0 px-5">
        <h2 className="font-bold text-xl mb-4 ">Customer Reviews</h2>

        {/* <div className="flex justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4 ">
            <Rating
              sx={{ fontSize: "2.5rem" }}
              name="size-large"
              size="large"
              value={data.rating}
              precision={0.5}
              readOnly
            />
            <p className="text-dark font-semibold">{`Based on ${data.numReviews} reviews`}</p>
          </div>
          <ReviewModal data={data} auth={auth} />
        </div>
      </div> */}

        <div className="col-span-4">
          {dataReviews?.data.length === 0 ? (
            <p>Todavia no hay comentarios</p>
          ) : (
            <>
              <div className="flex flex-col-reverse  gap-2 mb-10  ">
                {dataReviews?.data.map((review, index) => (
                  <div
                    key={index}
                    className=" md:flex border-t border-slate/50 p-2 pt-6"
                  >
                    <div className="flex-1 space-y-1 mb-4 md:mb-0  ">
                      <Rating
                        className="read-only"
                        value={review?.rating}
                        precision={0.5}
                        readOnly
                      />
                      <h4 className="text-dark  font-bold text-md">
                        {review.user}
                      </h4>
                      <p className="text-sm">{review.createdAt}</p>
                    </div>
                    <div className="flex-auto w-[30%]">
                      <h4 className="text-dark  font-bold text-md">
                        Excelente
                      </h4>
                      <p className="flex-auto  text-md">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Reviews;