import React from "react";
import "./ImageSlider.css";
import { useState } from "react";
import wsp from "../../../assets/LogoWhatsapp.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import circlePurple from "../../../assets/carousel/circlePurple.png";
import circle from "../../../assets/carousel/circle.png";
import arrowRight from "../../../assets/carousel/arrowRight.png"
import { arrow } from "@popperjs/core";



interface Props {
  slides: Array<{
    title: string;
    class: string;
  }>;
}

const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
 

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-full flex relative " id="hero">
    <div className="absolute top-1/2 cursor-pointer hover:opacity-80 transform -scale-x-100 left-9" onClick={goToPrevious}><img src={arrowRight} alt="circle2" /></div>
    
            <div className="absolute top-1/2 cursor-pointer hover:opacity-80 right-9" onClick={goToNext}><img src={arrowRight} alt="circle2" /></div>
      <div className={`${slides[currentIndex].class}`}>
        <a
          className="fixed bottom-6 right-6 z-10 hover:scale-150 transition-all duration-300 "
          href="./index.html"
        >
          <img className="w-20 h-20" src={wsp} alt="logo whatsapp" />
        </a>
        <div className="flex w-full absolute bottom-0 justify-center ">
          <img
            className="pr-9 pb-20 cursor-pointer hover:opacity-60"
            src={currentIndex === 0 ? circlePurple : circle}
            alt="circle"
            onClick={() => goToImage(0)}
          />
          <img
            className="pr-9 pb-20 cursor-pointer hover:opacity-60"
            src={currentIndex === 1 ? circlePurple : circle}
            alt="circle"
            onClick={() => goToImage(1)}
          />
          <img
            className="pr-9 pb-20 cursor-pointer hover:opacity-60"
            src={currentIndex === 2 ? circlePurple : circle}
            alt="circle"
            onClick={() => goToImage(2)}
          />
          <img
            className="pb-20 cursor-pointer hover:opacity-60"
            src={currentIndex === 3 ? circlePurple : circle}
            alt="circle"
            onClick={() => goToImage(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
