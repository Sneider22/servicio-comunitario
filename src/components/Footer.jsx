import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "/src/assets/Logo.png"

export const Footer = () => {
    return (
        <footer className="bg-yellow p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="w-full gap-6  flex items-center justify-start">
                    <img className="h-10 rounded-full" src={Logo} alt="" />
                    <p className="text-xs gap-2 font-medium flex flex-col items-start max-md:w-full md:w-[40%]">
                        Escuela para el Emprendimiento María Auxiliadora
                        <span className="text-xs text-gray-700">© 2022. Todos los derechos reservados</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/cclbupboleita">
                        <FontAwesomeIcon className="w-5 h-5" icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/cclbupboleita/">
                        <FontAwesomeIcon className="w-5 h-5" icon={faInstagram} />
                    </a>
                    <a href="https://t.me/cclbupboleita">
                        <FontAwesomeIcon className="w-5 h-5" icon={faTelegram} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
