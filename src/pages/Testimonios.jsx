import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const TestimonialCard = ({ name, course, year, content, rating }) => (
    <div className="bg-white p-6 shadow-[#b4b4b4] hover:shadow-2xl hover:scale-105 duration-300  rounded-lg shadow-md">
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
            name: "Alezka Andrade",
            course: "Educación Inicial",
            year: "?",
            content: "Mi experiencia fue una de las mejores experiencias de mi vida, el curso que realicé fue de educación inicial con el apoyo de una excelente maestra y todos los profesores del curso, ellos me han ayudado mucho a ver la vida de otra manera.",
            rating: 5
        },
        {
            name: "Profesora Verónica Aranguren",
            course: "Promotor Infantil",
            year: "2015 - 2018",
            content: "Mi experiencia fue muy gratificante a nivel personal, profesional y espiritual, hicimos un equipo de trabajo que mas que compañeros nos sentimos como familia, logrando muchos avances a nivel academico en cuanto a lo que ofreciamos a los estudiantes.",
            rating: 5
        },
        {
            name: "Jhon Olivares",
            course: "Mantenimiento de PC",
            year: "2011 - 2012",
            content: "Realice el curso de mantenimiento de pc de una duración de casi un año entre 2011 y 2012, para mí es un gran honor haber sido participante de lo que es este gran equipo de juventud y trabajo, ya que con ellos adquirí conocimientos suficientes, que hasta ahora me han sido muy útil tanto en la computación como en otras áreas",
            rating: 4
        },
        {
            name: "Juan Moreno",
            course: "Estudiante y docente",
            year: "2012-2013",
            content: "Fui parte de la capacitación laboral durante más o menos 1 año y medio, mi experiencia en el centro tanto como estudiante como docente fue una experiencia muy valiosa y la recuerdo con mucho cariño ya que me permitió desarrollarme y acercarme nuevamente a un ambiente que estaba dejando mucho de lado para ese entonces.",
            rating: 4
        }
    ]

    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto max-md:py-20 p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[90%] md:w-[40%] font-bold text-center mb-12 border-b-2 pb-4 w-[60%] border-blue mx-auto max-sm:text-2xl">Testimonios de Nuestros Estudiantes</h1>

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