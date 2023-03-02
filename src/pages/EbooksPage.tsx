import EbookList from "../components/EbookList";
import { Link } from "react-router-dom";

import AsideFilter from "../components/AsideFilter/AsideFilter";
import EbookCard from "../components/EbookCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFilter } from "../redux/slices/filterSlice";
import FooterPayment from "../components/FooterPayment";
import { selectAuth } from "../redux/slices/authSlice";
import NavbarTwo from "../components/NavbarTwo";

const EbooksPage = () => {
  const filters = useSelector(selectFilter);

  const [data, setData] = useState([]);

  const { category, price, rating } = filters;

  console.log(data);

  const { user } = useSelector(selectAuth);

  const navigate = useNavigate();

  useEffect(() => {
        
    if (!user) {
     navigate("/login")
    }
 }, [navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);

      try {
        const { data } = await axios.get(
          `https://no-country-personaltrainer-crossfit.onrender.com/api/products?category=${category}&rating=${rating}&minPrice=${price}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }

      // setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  console.log(data);

  return (
    <>
      <NavbarTwo/>
      <div className="container min-h-screen pt-10 pb-20 mx-auto">
        <div className="flex items-center pb-14 pl-8 gap-2 ">
          <Link to="/">
            <p className="text-sm font-medium">Inicio</p>
          </Link>
          <MdOutlineKeyboardArrowRight />
          <p className="text-[15px] font-bold ">Adquiri tu Ebook</p>
        </div>
        <div className="flex ">
          <AsideFilter />
          <div className="flex flex-wrap gap-6 ">
            {data?.map((book, index) => (
              <EbookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
      <FooterPayment/>
    </>
  );
};

export default EbooksPage;
