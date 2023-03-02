import { MdOutlineCancel } from "react-icons/md";
import CounterButton from "../../components/CounterButton";
import {
  useRemoveFromCartMutation,
} from "../../redux/api/cartApi";

import { ToastContainer, toast } from 'react-toastify';

import { Ebook } from "../../types";

type CartItem = {
  item: Ebook;
  total: number;
  quantity: number;
};

type Cart = {
  owner: String;
  subTotal: number;
  totalQty: number;
  items?: CartItem[];
};

interface CartProps {
  data?: Cart | undefined;
}

const DetailCart = ({ data }: any) => {
  const [removeFromCart, { data: deleteData, error, isLoading }] =
    useRemoveFromCartMutation();
    //toast.info("Producto eliminado del carrito", {autoClose: 1500})
  console.log(deleteData, error, isLoading);
  return (
    <>
    
      {data?.items?.map((product) => (
        <div
          className="flex md:pl-3 md:pb-10 pb-20 md:flex-row flex-col md:items-start items-center  "
          key={product?.item._id}
        >
          <div className="flex md:pb-0 pb-10">
            <div>
            <img
              className="w-[140px] h-[160px] rounded-[10px] "
              src={product?.item.img}
              alt={product?.item.title}
            />
            </div>
            
            <div className="relative left-2">

                <div className="pt-6">
                    <p className="font-semibold">
                        {product?.item.title.slice(0, 19)}    
                    </p>
                    <p className="text-[11px] text-[#00000080]"> Anatomía Ejercicios</p>
                </div>
                <div className="text-[11px] pt-16 relative w-[150px] ">
                    <p>Categoria: {product?.item.category}</p>
                    <p>Envío: en 3 - 6 Días Hábiles</p>
                    <p>Stock: <span className="text-[#4ECB71]">Disponible</span></p>
                    <p>Estado: Nuevo</p>
                </div>
            </div>
          </div>
          
          <div className="md:w-1/5 text-center relative md:top-8 md:left-12 md:block flex md:right-0 right-11">
            <div className="md:hidden block pr-5 relative md:right-0 right-2">Precio:</div>
            <div className="md:block relative md:left-0 left-2 ">${product?.item.price}</div>
         </div>
        <div className="md:w-1/5 text-center relative md:top-6 md:left-10 md:block flex items-center left-1 md:py-0 py-1">
             <div className="md:hidden block pr-5 ">Cantidad:</div>
             <CounterButton product={product} />
        </div>
        <div className="md:w-1/5 text-center relative md:top-8 md:left-6 md:block flex md:right-0 right-8 ">
            <div className="md:hidden block pr-5">Subtotal:</div>
            <div >${(product?.total).toFixed(0)}</div> 
        </div>
        <MdOutlineCancel className="  text-dark hover:cursor-pointer text-[#FF0000] text-[22px] relative top-8 right-2   "
              onClick={() => removeFromCart(product?.item._id)}>
        </MdOutlineCancel>
        <ToastContainer theme="colored" />
         
        </div>
      ))}
    </>
  );
};

export default DetailCart;