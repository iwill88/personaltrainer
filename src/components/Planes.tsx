import IconCheck from "../assets/plans/Vector.png";
import IconCancel from "../assets/plans/leaf-quad.png";

import puntitos from "../assets/plans/puntitos.png";
import { Link } from "react-router-dom";

const Planes = () => {
  return (
    <section className="pt-28" id="planes">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="mt-16 self-center">
            
            <h1 className="text-4xl text-center font-bold mb-5">
              ELEGÍ UN PLAN ACORDE A VOS
            </h1>
           
            <div className="flex justify-center">
              <img src={puntitos} alt="" />
            </div>
          </div>
          <div className="mt-8 sm:mt-0">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full mr-3">
              <div className="flex justify-end ">
                <button className="bg-white">
                  <img src={IconCancel} />
                </button>
              </div>
              <h2 className="text-center text-2xl font-bold my-5">
                Plan - 3 días
              </h2>
              <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
              <div className="m-5">
                <div className="flex my-5 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Disminuye factores de riesgo como obesidad, hipertensión, colesterol.</p>
                </div>
                <div className="flex my-5 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Desarrollar tu masa muscular.</p>
                </div>
                <div className="flex my-5 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Descender tus niveles de colesterol.</p>
                </div>
              </div>
              <Link to="/planes/2">
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-[10px] block mx-auto mt-10 drop-shadow-lg uppercase text-xs">
                  Descargar
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full mr-3">
              <div className="flex justify-end">
                <button className="bg-white">
                  <img src={IconCancel} />
                </button>
              </div>
              <h2 className="text-center text-2xl font-bold my-5">
                Plan - 5 días
              </h2>
              <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
              <div className="m-5">
                <div className="flex my-10 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Tonifica la masa muscular.</p>
                </div>
                <div className="flex my-10 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Disminuir tu presión arterial.</p>
                </div>
                <div className="flex my-10 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Evita dolores y contracturas.</p>
                </div>
              </div>
              <Link to="/planes/2">
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-[10px] block mx-auto mt-10 drop-shadow-lg relative top-5 uppercase text-xs">
                  Descargar
                </button>
              </Link>

            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-400 h-full ">
              <div className="flex justify-end">
                <button className="bg-white">
                  <img src={IconCancel} />
                </button>
              </div>
              <h2 className="text-center text-2xl font-bold my-5">
                Plan - 6 días
              </h2>
              <hr className="w-2/3 mx-auto mt-20 mb-10 border-gray-300" />
              <div className="m-5">
                <div className="flex my-5 text-sm ">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Disminuye factores de riesgo como obesidad, hipertensión, colesterol.</p>
                </div>
                <div className="flex my-5 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Desarrollar tu masa muscular.</p>
                </div>
                <div className="flex my-5 text-sm">
                  <img src={IconCheck} className="h-5 m-1" />
                  <p>Evita dolores y contracturas.</p>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <Link to="/planes/3">
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-14 rounded-[10px] block mx-auto mt-10 drop-shadow-lg uppercase text-xs ">
                  Descargar
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Planes;
