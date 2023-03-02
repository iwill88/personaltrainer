import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterPayment from "../components/FooterPayment";
import { useAddProductToCartMutation } from "../redux/api/cartApi";
import { useGetSingleEbookQuery } from "../redux/api/EbooksApi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import ReviewModal from "../components/ReviwModal";
import Reviews from "../components/Reviews";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";
import NavbarTwo from "../components/NavbarTwo";

interface Book {
  title: string;
  image: string;
  price: number;
  cantidad: number;
  rating: number;
  link?: string;
}

const EbooksDetail = () => {
  const [loading, setLoading] = useState(false);
  const { ebookId } = useParams<{ ebookId: any }>();
  const [counter, setCounter] = useState(1);

  const { data, error, isLoading } = useGetSingleEbookQuery(ebookId);

  const [addProductToCart, { data: productoData, error: addError }] =
    useAddProductToCartMutation();


  const { user } = useSelector(selectAuth);

  const navigate = useNavigate();

  useEffect(() => {
        
    if (!user) {
     navigate("/login")
    }
 }, [navigate]);

  console.log(addError);

  const productStock = [];
  if (data?.stock) {
    for (let i = 1; i <= data.stock; i++) {
      productStock.push(i);
    }
  }

  const handleChange = (e: any) => setCounter(Number(e.target.value));

  

  const handleClick = () => {
    if (data?.stock === 0) {
     
      return;
    }

    addProductToCart({
      product: data?._id,
      quantity: counter,
    });
    
    toast.success("Se ha agregado al carrito", {autoClose: 1500})
  };

  return (
    <>
    <NavbarTwo/>
    <div className="md:container mx-auto ">
      <nav className="breadcrumb mb-6 pt-10 " aria-label="breadcrumbs">
        <ol className="flex">
          <div className="flex items-center pb-14 pl-8 gap-2 ">
            <Link to="/">
              <p className="text-sm font-medium">Inicio</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
            <Link to="/ebooks">
              <p className="text-[15px] font-medium ">Adquiri tu Ebook</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
            <p className="text-[15px] font-bold ">Ver más</p>
          </div>
        </ol>
      </nav>
      <div className="">
        <div className="md:grid md:grid-cols-3  w-full mb-4 gap-4 flex flex-col items-center ">
          <div className="flex flex-col items-center">
              <img
                src={data?.img}
                alt="Nombre del eBook"
                className="w-full object-cove rounded-[10px] mb-5"
              />
              <Rating
              className="pb-20"
              name="read-only"
              sx={{ transform: "scale(0.8)", color: "#59CE79" }}
              value={data?.rating}
              precision={0.5}
              readOnly
              />
          </div>
         
          <div className="col-span-2 md:ml-20 ml-10 md:mr-0 mr-10">
            <h3 className="text-slate-700 font-bold text-3xl mb-4 md:pr-80">
              {data?.title}
            </h3>
            <span className="text-3xl font-bold ">$ {data?.price}</span>
            <p className="text-gray-600 text-sm my-4 capitalize md:pr-80">
              {data?.description.slice(0, 700)}
            </p>
            <div className="pt-8 pb-8">
              <p className="font-semibold">Estado: <span className="font-bold">Nuevo</span> </p>
            </div>
            
            <div className="flex items-center gap-4 pb-10">
              <div className="flex items-center">
                <div className="pr-5 font-semibold">Cantidad:</div>
                {productStock.length === 0 ? (
                  <select
                    className=" px-2 py-1 w-full rounded-sm hover:cursor-pointer "
                    disabled
                  >
                    <option value="0">0</option>
                  </select>
                ) : (
                  <select
                    onChange={(e) => handleChange(e)}
                    className=" p-2 w-full rounded-md hover:cursor-pointer bg-gray border-2 border-orange text-slate"
                  >
                    {productStock.map((qty, index) => (
                      <option key={index} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              
            </div>
            <div className="flex justify-center pb-10">
              <button
                  className="bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm py-[7px] px-4  rounded-[10px] block drop-shadow-lg"
                  disabled={loading}
                  type="submit"
                  onClick={() => handleClick()}
                >
                  {loading ? (
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
                <ToastContainer theme="colored" />
                
            </div>
            <ReviewModal/>
          </div>
        </div>
      </div>
      <Reviews/>

    </div>
    <FooterPayment/>
    </>
    
  );
};

export default EbooksDetail;