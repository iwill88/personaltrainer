import decoration from "../assets/decorationInfo.png";
import visa from "../assets/footerPayment/visa-logo.png";
import cabal from "../assets/footerPayment/cabal-logo-tarjeta-extravio.png";
import maestro from "../assets/footerPayment/Maestro.png";
import mastercard from "../assets/footerPayment/mastercard.png";
import mercado_credito from "../assets/footerPayment/mercado_credito.png";
import naranja from "../assets/footerPayment/NARANJAOK.png";



const FooterPayment = () => {
    return (
        <footer className="flex md:pl-20 justify-center border-t border-violeta-100"> 
            <div className="md:mr-20" >
                <div className="relative top-7">
                    <h1 className="text-base uppercase font-bold">Medios de pago</h1>
                </div>
                <div className="flex md:flex-row flex-col items-center relative top-7">
                    <div className="md:pr-32 pr-24">
                        <p className="text-sm py-7">Hasta 12 cuotas sin tarjeta</p>
                        <img src={mercado_credito} alt="mercado crédito" />
                    </div>
                    <div className="md:pr-10">
                        <p className="text-sm py-7">Tarjetas de crédito</p>
                        <div className="flex">
                            <img className="pr-4 h-10" src={visa} alt="visa" />
                            <img className="pr-4 h-10" src={mastercard} alt="mastercard" />
                            <img className="h-10" src={naranja}alt="naranja" />
                        </div>
                       
                    </div>
                    <div>
                        <p className="text-sm py-7">Tarjetas de débito</p>
                        <div className="flex md:pb-0 pb-10">
                            <img className="pr-4 h-8" src={visa} alt="visa" />
                            <img className="pr-4 h-8" src={cabal} alt="cabal" />
                            <img className="pr-4 h-8" src={maestro} alt="maestro" />
                            <img className="h-8" src={mastercard} alt="mastercard" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:block hidden">
                <img className="w-56" src={decoration} alt="decoration info" />
            </div>
        </footer>
    );
}

export default FooterPayment;