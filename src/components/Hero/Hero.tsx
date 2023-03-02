
import ImageSlider from "./ImageSlider/ImageSlider";

const Hero = () => {
  interface Slide {
    title: string;
    class: string;
  }

  const slides: Slide[] = [
    {
      title: "hero image 1",
      class: "carouselContainer1",
    },

    {
      title: "hero image2",
      class: "carouselContainer2",
    },
    {
      title: "hero image 3",
      class: "carouselContainer3",
    },
    {
      title: "hero image 4",
      class: "carouselContainer4",
    },
  ];

  return (
    <>
      <ImageSlider slides={slides} />
    </>
  );
};

export default Hero;
