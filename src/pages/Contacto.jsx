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
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-blue mr-2" />
                                    <span className="max-md:w-[250px] md:w-[400px]">Av. Rómulo Gallegos Centro Juvenil Don Bosco, piso 1, Boleíta Norte. Municipio Sucre, Estado Miranda.</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-blue mr-2" />
                                    <div className="flex flex-col">
                                        <p>+58 212-234-5587</p>
                                        <p>+58 424-206-9080</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faIdCard} className="h-6 w-6 text-blue mr-2" />
                                    <span className="mr-2 font-medium">RIF: </span>
                                    <span>J-30234355-0</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faMailBulk} className="h-6 w-6 text-blue mr-2" />
                                    <a href="mailto:juventudytrabajobup@gmail.com" className="mr-2 text-blue" >juventudytrabajobup@gmail.com</a>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mt-8 mb-4">Horario de Atención</h2>
                            <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                            <p>Sábados: 9:00 AM - 1:00 PM</p>
                        </div>

                        <div>
                            <div className="flex items-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.1501475396168!2d-66.82522768352437!3d10.493514491899063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a590072e9c66b%3A0xc89409db48c9189f!2sCentro%20de%20Capacitaci%C3%B3n%20Laboral%20Barrios%20unidos%20de%20Petare!5e1!3m2!1ses-419!2sus!4v1730515293680!5m2!1ses-419!2sus" className='md:w-[600px] md:h-[450px]  max-md:h-[250px] b-0 rounded-md' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
