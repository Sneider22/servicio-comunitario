import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "/src/assets/Logo.png"

export const Footer = () => {
    return (
        <footer className="bg-yellow p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <p className="text-xs gap-5 font-medium flex items-center max-md:w-full md:w-[40%] ">
                    <img className="mx-auto h-10 rounded-full" src={Logo} alt="" /> Escuela para el Emprendimiento María Auxiliadora
                </p>
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
