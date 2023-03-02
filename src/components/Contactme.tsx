import * as React from "react";
import { useForm } from "react-hook-form";
import ellipseLeft from "../assets/contacme/Ellipse 11.png";
import ellipseRight from "../assets/contacme/Ellipse 12.png";

type FormData = {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmarpassword: string;
  message: string;
};

export default function Contactme() {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-10 pt-20" id="contacto">
      <div className="grid md:grid-cols-2">
        <div className=" bg-white rounded-lg p-3  flex flex-col ">
          <h1 className="md:text-[46px] text-[35px] font-bold mb-10">Contactame</h1>
          <div className="md:pl-10 pl-2">
            <form onSubmit={onSubmit}>
              <div className="mb-2 flex md:flex-row flex-col">
                <div className="md:w-1/2 w-full mr-2">
                  <label className="block font-medium text-gray-700 mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Nombre"
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <label className="block font-medium text-gray-700 mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label className="block font-medium text-gray-700 mb-2">
                  ¿Cómo puedo ayudarte?
                </label>
                <textarea
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  rows={6}
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <div className="flex justify-end ">
                <button
                  className="bg-purple-600 hover:bg-purple-500 text-xs text-white font-medium py-2 px-16 rounded-xl block mt-5 drop-shadow-lg uppercase"
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
                    "Enviar"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div
            className="opacity-80 w-48"
            style={{ marginTop: "-110px", pointerEvents: "none" }}
          >
            <img src={ellipseLeft} alt="" />
          </div>
        </div>
        <div>
          <div
            className="md:flex justify-end opacity-80 hidden"
            style={{ pointerEvents: "none" }}
          >
            <img src={ellipseRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
