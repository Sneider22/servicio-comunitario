import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "/src/assets/Logo.png"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <img src={Logo} className="w-16 h-16 mb-8 rounded-full" alt="" />
            <h1 className="text-6xl font-bold text-blue-600">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-700">Página no encontrada</p>
            <p className="mt-2 text-gray-500">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
            <a
                href="/"
                className="mt-8 flex items-center text-blue-600 hover:text-blue-800"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-5 w-5" />
                Volver a la página principal
            </a>
        </div>
    )
}