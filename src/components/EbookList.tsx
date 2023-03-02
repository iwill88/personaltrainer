import { useState } from "react";
import RatingStars from "./RatingStart";
import { Link } from "react-router-dom";
import AsideFilter from "./AsideFilter/AsideFilter";
import { Ebook } from "../types";

import EbookCard from "./EbookCard";

interface EbooksProps {
  books: Ebook[];
}

const EbookList = ({ books }: EbooksProps) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  console.log(books);

  return (
    <section className="flex  ">
      <AsideFilter />
   
        <div className="grid grid-cols-4 md:w-[5/6] w-full ">
          {books?.map((book) => (
            <EbookCard key={book._id} book={book} />
          ))}
        </div>

      
    </section>
  );
};

export default EbookList;
