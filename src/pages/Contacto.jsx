import { faIdCard, faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Contacto() {
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[70%] md:w-[40%] font-bold text-center mb-12 border-b-2 pb-6 w-[30%] border-blue mx-auto">Contáctanos</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-blue-500 mr-2" />
                                    <span>Av. Rómulo Gallegos Centro Juvenil Don Bosco, piso 1, Boleíta Norte. Municipio Sucre, Estado Miranda.</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-blue-500 mr-2" />
                                    <div className="flex flex-col">
                                        <p>+58 212-234-5587</p>
                                        <p>+58 424-206-9080</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faIdCard} className="h-6 w-6 text-blue-500 mr-2" />
                                    <span className="mr-2 font-medium">RIF: </span>
                                    <span>J-30234355-0</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faMailBulk} className="h-6 w-6 text-blue-500 mr-2" />
                                    <a href="mailto:juventudytrabajobup@gmail.com" className="mr-2 text-blue" >juventudytrabajobup@gmail.com</a>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mt-8 mb-4">Horario de Atención</h2>
                            <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                            <p>Sábados: 9:00 AM - 1:00 PM</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Enviar Mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}