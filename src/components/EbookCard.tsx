import { useState } from "react";
import { Link } from "react-router-dom";
import { Ebook } from "../types";
import RatingStars from "./RatingStart";
import { Rating } from "@mui/material";

interface EbooksProps {
  book: Ebook;
}

const EbookCard = ({ book }: EbooksProps) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col mr-5 items-center">
      <Link to={`/ebooks/${book._id}`}>
        {book.img ? (
          <img className="w-[193px] h-[237px] border rounded-[10px]" src={book?.img} alt={book.title} />
        ) : (
          "not found"
        )}
      </Link>
      <button
        className="w-[95%] bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm  rounded-[10px] block py-2 my-5 drop-shadow-lg"
        disabled={false}
        type="submit"
      >
        {false ? (
          <svg
            className="motion-reduce:hidden animate-spin ..."
            viewBox="0 0 24 24"
          >
            Processing...
          </svg>
        ) : (
          <Link to={`/ebooks/${book._id}`}>
            <div className="flex uppercase items-center justify-center py-1 font-bold">
              
              <p className="text-xs">Ver más</p>
            </div>
          </Link>
        )}
      </button>
      <div className="w-full flex justify-center items-center">
        <Rating
          name="read-only"
          sx={{ transform: "scale(0.8)", color: "#59CE79" }}
          value={book?.rating}
          precision={0.5}
          readOnly
        />
        <p className="text-sm font-bold">${book?.price}</p>
      </div>
      {/* <div className="flex items-center justify-between ">
        <RatingStars RatingIndex={book?.rating} setRatingIndex={setRating} />
        <p className="text-sm font-black">${book?.price}</p>
      </div> */}
    </div>
  );
};
export default EbookCard;