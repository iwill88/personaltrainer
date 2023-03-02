import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import IcoPdf from "../assets/plans/carbon_document-pdf.png";
import GroupLunes from "../assets/plans/GroupLunes.png";
import GroupMartes from "../assets/plans/GroupMartes.png";
import GroupJueves from "../assets/plans/GroupJueves.png";
import Carousel from "nuka-carousel";
import FooterPayment from "../components/FooterPayment";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";
import NavbarTwo from "../components/NavbarTwo";


const PlanesPage = () => {
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState<number>(1);

  const { user } = useSelector(selectAuth);

  const navigate = useNavigate();

  useEffect(() => {
        
    if (!user) {
     navigate("/login")
    }
 }, [navigate]);



  return (
    <>
      <NavbarTwo/>
      <div className="container mx-auto">
        <nav className="breadcrumb my-10 mb-14 ml-8" aria-label="breadcrumbs">
          <ol className="flex items-center  gap-2">
            <Link to="/">
              <p className="text-sm font-medium">Inicio</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
            <p className="text-[15px] font-bold ">Planes</p>
          </ol>
        </nav>
        <main>
          <h1 className="text-4xl mb-16 font-semibold">Tu Plan por 3 días</h1>
          <div className="flex flex-col md:flex-row md:mr-40">
            <div className="w-full md:w-2/3 mr-40">
              <Carousel slideIndex={section - 1} withoutControls>
                <img src={GroupLunes} alt="Group Lunes" className="w-full" />
                <img src={GroupMartes} alt="Group Martes" className="w-full" />
                <img
                  src={GroupJueves}
                  alt="Group Miércoles"
                  className="w-full"
                />
              </Carousel>
            </div>
            <div className="w-full md:w-1/3 justify-center">
              <div className="md:pt-0 pt-10">
                <h1 className="text-2xl font-bold text-center">
                  Tu plan de entrenamiento
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center my-10">+</h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center mb-20">
                  Tu plan de alimentacion
                </h1>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={IcoPdf} alt="IcoPdf" />
                </div>
                <div>
                  <h1 className="m-4 font-semibold">100% personalizado</h1>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <button
                  className="bg-violeta-100 hover:bg-purple-400 text-white font-medium  text-sm  rounded-[10px] block my-5 px-7 py-2 drop-shadow-lg"
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
                    <div className="flex uppercase items-center justify-center ">
                      
                      <p className="text-xs">Pagar y descargar</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8 mb-4">
            <button
              className={
                section === 1 ? " text-xl underline" : " text-xl"
              }
              onClick={() => setSection(1)}
            >
              1
            </button>
            <button
              className={
                section === 2 ? " text-xl underline" : " text-xl"
              }
              onClick={() => setSection(2)}
            >
              2
            </button>
            <button
              className={
                section === 3 ? " text-xl underline" : " text-xl"
              }
              onClick={() => setSection(3)}
            >
              3
            </button>
          </div>
        </main>
      </div>
      <div className="border-b border-violeta-100"></div>
      <FooterPayment/>
    </>
  );
};

export default PlanesPage;



