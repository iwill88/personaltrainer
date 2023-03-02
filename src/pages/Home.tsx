import Info from "../components/Info/Info";

import Contactme from "../components/Contactme";

import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Planes from "../components/Planes";
import EbookSection from "../components/EbookSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Info />
      <Planes />
      <Testimonials />
      <EbookSection />
      <Contactme />
      <Footer/>

    </>
  );
};

export default Home;
