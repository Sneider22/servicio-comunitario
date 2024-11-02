import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const TestimonialCard = ({ name, course, year, content, rating }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow' : 'text-gray-300'}`} fill="currentColor" />
            ))}
        </div>
        <p className="text-gray-700 mb-4 text-balance">{content}</p>
        <div className="text-sm text-gray-500">
            <p className="font-semibold">{name}</p>
            <p>{course}, {year}</p>
        </div>
    </div>
)

export default function Testimonios() {
    const testimonials = [
        {
            name: "Luis Pico",
            course: "Diseño Gráfico",
            year: 2023,
            content: "Mi experiencia en el centro de capacitación fue muy bonita ya que crecí en diferentes ámbitos de mi vida, tanto en lo personal como en lo laboral y espiritual.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            course: "Marketing Digital",
            year: 2022,
            content: "Gracias a este curso, pude dar un giro a mi carrera. El conocimiento adquirido me permitió conseguir un trabajo en una agencia de marketing. Altamente recomendado.",
            rating: 5
        },
        {
            name: "Ana Martínez",
            course: "Asistente Administrativo",
            year: 2023,
            content: "El curso fue muy completo y práctico. Me dio las herramientas necesarias para desempeñarme eficientemente en mi nuevo trabajo como asistente ejecutiva.",
            rating: 4
        },
        {
            name: "Pedro Sánchez",
            course: "Computación",
            year: 2022,
            content: "Excelente curso para actualizar mis habilidades informáticas. Los profesores son muy pacientes y explican todo de manera clara. Me ha ayudado mucho en mi trabajo actual.",
            rating: 5
        },
        {
            name: "Laura Fernández",
            course: "Publicidad",
            year: 2023,
            content: "El curso de Publicidad me dio una base sólida para entender cómo funciona la industria. Los proyectos prácticos fueron muy útiles y ahora tengo un portafolio para mostrar a potenciales empleadores.",
            rating: 4
        }
    ]

    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[90%] md:w-[40%] font-bold text-center mb-12 border-b-2 pb-6 w-[60%] border-blue mx-auto">Testimonios de Nuestros Estudiantes</h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-semibold mb-4">¿Quieres ser parte de nuestra comunidad?</h2>
                        <p className="text-gray-700 mb-8">
                            Únete a nosotros y comienza tu camino hacia el éxito profesional.
                        </p>
                        <a
                            href="/cursos"
                            className="bg-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue transition duration-300"
                        >
                            Explora Nuestros Cursos
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}