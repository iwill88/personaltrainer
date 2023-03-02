import React from "react";
import decorationCircle from "../../../assets/decorationCircle.png";
import reviewImg1 from "../../../assets/reviewImage.png";
import reviewImg2 from "../../../assets/reviewImage2.png";
import reviewImg3 from "../../../assets/reviewImage3.png";
import greenStar from "../../../assets/greenStar.png";

const Cards = () => {
  interface ProfileCard {
    id: number;
    name: string;
    city: string;
    state: string;
    text: string;
    picture: string
  }

  const profilesCard: ProfileCard[] = [
    {
      id: 1,
      name: "Anita Maciel",
      city: "Flores",
      state: "Buenos Aires",
      text: "Camila es excelente. Muy atenta a la hora de hablarme y aconsejarme en cada ejercicio. Se detiene en cada momento a corroborar que haga bien los ejercicios.",
      picture: reviewImg1
    },
    {
      id: 2,
      name: "Pablo Hernandez",
      city: "Recoleta",
      state: "Buenos Aires",
      text: "Desde que arranque con sus entrenamientos, y acompañamiento, fue todo muy bueno. Hace 5 meses que Camila acompaña mi entrenamiento y alimentación. La verdad me siento muy cómodo.",
      picture: reviewImg2
    },
    {
      id: 3,
      name: "Juan Palacios",
      city: "Ramos Mejías",
      state: "Buenos Aires",
      text: "Desde joven siempre hice actividad física, es algo que me gusta muchisimo. Esta vez he encontrado en la entrenadora muy buena, quien por mi edad me ha enseñado a como hacer mi actividad física.",
      picture: reviewImg3
    },
  ];

  return (
    <>
      {profilesCard.map((card) => {
        return (
          <div
            className={card.id === 2 ? "w-[306px] h-[295px] border-2 border-[#0000004d] rounded-[20px] md:mx-5 relative top-[60px] md:mb-0 mb-12" : "w-[306px] h-[295px] border-2 border-[#0000004d] rounded-[20px] md:top-0 relative top-[60px] md:mb-0 mb-12"}
            key={card.id}
          >
            <img
              className="absolute rounded-t-[15px] rounded-r-[0px]"
              src={decorationCircle}
              alt="decoration circle"
            />
            <div className="relative p-5 text-[11px]">
              <div className="flex justify-between">
                <div className="text-white">
                  <h3 className="text-[13px] pt-5 pb-5 font-bold">{card.name}</h3>
                  <p className="text-[11px font-bold]">{card.city},</p>
                  <p className="text-[11px font-bold]">{card.state}</p>
                </div>
                <img src={card.picture} alt="review image" />
              </div>
              <div className="flex justify-center pt-5 pb-[30px]">
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
                <img src={greenStar} alt="green start" />
              </div>

              <p className="text-[11px] font-semibold">{card.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
