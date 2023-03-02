import { useState } from "react";
import { Link } from "react-router-dom";
import EbookImage from "../assets/ebooks/imageEbook.png";
import puntitos from "../assets/plans/puntitos.png";

const EbookSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="md:container flex  items-center justify-center md:pt-[50px]" id="ebooks">
        <img className="md:block hidden" src={EbookImage} alt="ebooks image" />
        <div className="mt-16 flex flex-col items-center ">
          <h1 className="md:text-[59px] text-4xl tracking-widest	leading-relaxed text-center font-bold mb-5">
            ADQUIRI TU <br/> EBOOK
          </h1>
          <div className="flex justify-center">
            <img className="relative left-4 w-auto h-auto" src={puntitos} alt="puntitos" />
          </div>
          <Link to="/ebooks">
            <button
              className="bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm py-2 px-14 rounded-xl block mt-5 drop-shadow-lg"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <svg
                  className="motion-reduce:hidden animate-spin ..."
                  viewBox="0 0 24 24"
                >
                  Processing...
                </svg>
              ) : (
                "VER EBOOKS"
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EbookSection;
