import { faCalendar, faClock, faUsers, faLaptop, faBullhorn, faPenNib, faBriefcase, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const CourseCard = ({ title, description, duration, students, startDate, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md shadow-[#b4b4b4]">
        <h3 className="text-xl font-semibold mb-2">
            {icon} {title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
            <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-2" />
            <span>{duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
            <FontAwesomeIcon icon={faUsers} className="h-4 w-4 mr-2" />
            <span>{students} estudiantes por clase</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
            <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 mr-2" />
            <span>Próximo inicio: {startDate}</span>
        </div>
    </div>
)

export default function Cursos() {
    const courses = [
        {
            title: "Computación",
            description: "Aprende las habilidades esenciales de informática para el mundo laboral moderno.",
            duration: "3 meses",
            students: 20,
            startDate: "1 de Octubre, 2024",
            icon: <FontAwesomeIcon icon={faLaptop} className="h-4 w-4 mr-2" />
        },
        {
            title: "Diseño Gráfico",
            description: "Domina las herramientas de diseño y crea impactantes piezas visuales.",
            duration: "4 meses",
            students: 15,
            startDate: "15 de Octubre, 2024",
            icon: <FontAwesomeIcon icon={faPenNib} className="h-4 w-4 mr-2" />
        },
        {
            title: "Asistente Administrativo",
            description: "Prepárate para roles de apoyo administrativo en diversos sectores empresariales.",
            duration: "3 meses",
            students: 25,
            startDate: "1 de Noviembre, 2024",
            icon: <FontAwesomeIcon icon={faBriefcase} className="h-4 w-4 mr-2" />
        },
        {
            title: "Marketing Digital",
            description: "Aprende a promocionar negocios y productos en el entorno digital.",
            duration: "4 meses",
            students: 20,
            startDate: "15 de Noviembre, 2024",
            icon: <FontAwesomeIcon icon={faChartSimple} className="h-4 w-4 mr-2" />
        },
        {
            title: "Publicidad",
            description: "Desarrolla estrategias publicitarias efectivas para diversos medios.",
            duration: "3 meses",
            students: 15,
            startDate: "1 de Diciembre, 2024",
            icon: <FontAwesomeIcon icon={faBullhorn} className="h-4 w-4 mr-2" />
        }
    ]

    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[70%] md:w-[40%] font-bold text-center mb-12 border-b-2 pb-6  border-blue mx-auto">Nuestros Cursos</h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-semibold mb-4">¿Listo para empezar?</h2>
                        <p className="text-gray-700 mb-8">
                            Inscríbete ahora y da el primer paso hacia tu futuro profesional.
                        </p>
                        <a
                            href="/contacto"
                            className="bg-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue transition duration-300"
                        >
                            Inscríbete Ya
                        </a>
                    </div>
                </div>
            <Footer/>
            </div>
        </div>
    )
}