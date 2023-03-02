import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ResumenCart from "./ResumenCart";
import { useNavigate } from "react-router-dom";
import { useGetCartQuery } from "../../redux/api/cartApi";
import DetailCart from "./DetailCart";
import FooterPayment from "../../components/FooterPayment";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import NavbarTwo from "../../components/NavbarTwo";


const CartPage = () => {
  const { data, error } = useGetCartQuery();

  const cartSubtotal:any = data?.subTotal

  console.log(data, error);

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
            <div>
                <div className="container mx-auto  mb-12">
                <nav className="breadcrumb my-2" aria-label="breadcrumbs">
                    <div className="flex items-center py-10 gap-2 ">
                        <Link to="/">
                            <p className="text-sm-medium">Inicio</p>
                        </Link>
                        <MdOutlineKeyboardArrowRight />
                        <Link to="/ebooks">
                            <p className="text-[15px] font-medium ">Adquiri tu Ebook</p>
                        </Link>
                        <MdOutlineKeyboardArrowRight />
                            <p className="font-bold">Carrito</p>
                    </div>
                </nav>
                <main>
                    <h1 className="md:text-4xl text-2xl md:text-start text-center mb-10 md:relative right-7 font-semibold">Detalle de la compra</h1>
                    <div className="flex flex-col md:flex-row ">
                        <div className="w-full md:w-2/3 border-b border-violeta-100 mr-20 pb-5 mb-5">
                            <div className=" py-8 pl-5 md:flex hidden">
                                <div className="w-2/5 text-start text-lg font-semibold mr-20">
                                    Tus productos
                                </div>
                                <div className="w-1/5 text-center text-[15px] font-medium">
                                    Precio
                                </div>
                                <div className="w-1/5 text-center text-[15px] font-medium">
                                    Cantidad
                                </div>
                                <div className="w-1/5 text-center text-[15px] font-medium">
                                    Subtotal
                                </div>
                            </div>
                            <DetailCart data={data}/>
                            
                        </div>
                        <ResumenCart  total={data?.subTotal}/>

                        
                    
                    </div>
                    <div  className="text-center pl-[170px] mb-12 text-2xl md:block hidden">
                        ${cartSubtotal}
                    </div>
                
                    
                </main>

                </div>

            </div>
            <FooterPayment/>
        </>
        
    );
}

export default CartPage;