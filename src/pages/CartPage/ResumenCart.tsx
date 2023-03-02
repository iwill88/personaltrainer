import { useState } from "react";
import Spinner from "../../components/Spinner";
import { useCreatePaymentMutation } from "../../redux/api/cartApi";

interface CartDetailProps {
  total?: number | undefined;
}

const ResumenCart = ({ total }: any) => {
  const [createPayment, { data, error, isLoading }] =
    useCreatePaymentMutation();

  if (data) {
    window.location.href = data?.body?.init_point;
  }

  console.log(total);

  return (
    <div className="w-full md:w-1/3 justify-center md:pl-20 relative top-7">
      <div className="pb-7">
        <h1 className="text-2xl font-semibold text-center uppercase">
          Resumen de la compra
        </h1>
      </div>
      <div className="border border-[#00000080]">
        <div className="flex justify-between  text-xl bg-[#9747ff0d] p-5">
          <p>Subtotal</p>
          <p className="font-semibold">${total}</p>
        </div>
        <div className="flex justify-center  py-4 px-12">
          <button
            className="bg-purple-600 w-full hover:bg-purple-500 text-white font-medium py-2  rounded-xl mt-5 drop-shadow-lg flex justify-center items-center"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Spinner text={"Processing"} />
            ) : (
              <div className="flex uppercase items-center justify-center  py-1 px-5">
                <span onClick={createPayment} className="text-xs uppercase">
                  Finalizar compra
                </span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumenCart;
