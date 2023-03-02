import React from "react";
import viñeta from "../../assets/viñetaInfo.png";
import decorationInfo from "../..//assets/decorationInfo.png";
import infoImage from "../../assets/InfoImage.png";

const Info = () => {
  return (
    <>
      <div className="md:container flex md:flex-row flex-col  min-h-[70vh] pt-40" id="aboutme">
        <div className=" pr-[30px] md:pl-0 pl-[30px] md:text-left text-justify">
          <div className="md:text-[64px] text-[35px] text-start flex w-full md:justify-start justify-center items-center font-semibold">
            <img className="md:w-[50px] md:h-[54.3px] w-[30px] h-[32px] mr-[25px] " src={viñeta} alt="viñeta info" />
            <h1>Hola, soy Camila</h1>
          </div>
          <p className="pt-[50px] md:pb-[0px] pb-[20px] font-semibold md:text-xl">
          Mi misión es transformar lo complicado en simple, es decir, aquí tendrás comodidad y menos burocracia desde los servicios en línea hasta el autoservicio en las sedes.
          </p>
          <p className="md:pb-[0px] pb-[40px] font-semibold md:text-xl">
          Te brindo un entrenamiento rápido e intenso desarrollado para quien quiera pierda peso y aumente la resistencia de la musculatura, además  de incentivar el aceleramiento de su metabolismo y favorecer el adelgazamiento.
          </p>
          
          <div className="flex items-center font-semibold md:text-xl">
            <img
              className="w-[220px] mr-[90px] md:block hidden"
              src={decorationInfo}
              alt="decoration info"
            />
            <p className="relative bottom-5">
              En este nuevo camino que decidiste seguir, te acompaño con planes especialmente personalizados donde se combina nutrición, movilidad, ejercicios de impacto o sin impacto y estiramiento más relajación.
            </p>
          </div>
        </div>
        <div className="md:block flex justify-center">
          <img
            className="w-[220px] absolute ml-[50px] md:block hidden"
            src={decorationInfo}
            alt="decoration info"
          />
          <img className="w-[750px] md:max-w-[100%] max-w-[80%] h-auto relative top-[55px]" src={infoImage} alt="info image" />
        </div>
      </div>
    </>
  );
};

export default Info;
