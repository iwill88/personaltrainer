import logo from "../assets/footer/logo.png";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-violeta-100">
        <div className="md:auto sm:auto flex justify-between md:flex-row flex-col ">
          <div className="md:w-3/4 md:block flex flex-col items-center">
            <a className="flex items-center pt-16 pb-4 md:pl-16 ">
              <img
                className="md:w-[230px] w-[160px] h-auto md:relative left-4 "
                src={logo}
                alt=""
              />
            </a>
            <div className="text-start relative md:left-56 left-20 font-semibold ">
              <h6> CAMILA BRONN</h6>
            </div>
            <br></br>
            
          </div>
          <div className="md:w-2/4">
            <div className=" text-xl flex flex-col justify-center md:items-start items-center pt-7 ">
              <h3 className="font-bold"> MIS REDES</h3>
              <div className="md:columns-2">
                <a className="flex items-center space-x-3 pt-6 pb-3 pr-5 hover:text-violeta-100 transition cursor-pointer">
                  <BsInstagram />
                  <span className="font-semibold">Instagram</span>
                </a>
              </div>
              <div className="md:columns-2 ">
                <a className="flex items-center space-x-3 pt-5 pb-3 pr-5 hover:text-violeta-100 transition  cursor-pointer">
                  <BsFacebook />
                  <span className="font-semibold">Facebook</span>
                </a>
                <div className="md:w-2/4">
                  <div className="md:columns-2">
                    <div className="flex items-center space-x-3 pt-5 pr-5 hover:text-violeta-100 transition cursor-pointer">
                      <a className="flex items-center space-x-3  ">
                        <BsTwitter />
                        <span className="font-semibold">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div />
          
        </div>
        <div className=" font-semibold 2xl md:text-end text-center flex justify-center md:pr-52 md:relative bottom-5 md:py-0 py-10 md:px-0 px-10">
              <h6>Copyright@2023. All rights reserved | CR Bronn </h6>
          </div>
      </footer>
    </>
  );
};

export default Footer;
