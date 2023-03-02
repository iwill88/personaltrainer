import { Link } from "react-router-dom";
import { useGetAllEbooksQuery } from "../redux/api/emptyApi";

const Recomendados = () => {
  const { data } = useGetAllEbooksQuery();

  return (
    <div className="grid grid-cols-4 ">
      {data?.map((book, index) => {
        if (index >= 4)
          return (
            <div key={index} className="flex flex-col items-center">
              <Link to={`eBookDetail/${book._id}`}>
                <img src={book.img} alt={book.title} />
              </Link>

              {/* <button
                  className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block my-5 drop-shadow-lg"
                  disabled={loading}
                  type="submit"
                >
                  {isLoading ? (
                    <svg
                      className="motion-reduce:hidden animate-spin ..."
                      viewBox="0 0 24 24"
                    >
                      Processing...
                    </svg>
                  ) : (
                    <div className="flex uppercase items-center justify-center ">
                      <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                      <p className="text-xs">Agregar al carrito</p>
                    </div>
                  )}
                </button>
                <div className="flex items-center mb-32">
                  <RatingStars
                    RatingIndex={book.rating}
                    setRatingIndex={setRating}
                  />
                  <p className="text-sm font-black">${book.price}</p>
                </div> */}
            </div>
          );
      })}
    </div>
  );
};
export default Recomendados;
