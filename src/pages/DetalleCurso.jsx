import { NavLink } from "react-router-dom"
import { Header } from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faBullhorn, faCalendar, faCalendarAlt, faChartSimple, faCheck, faCheckCircle, faClock, faLaptop, faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../components/Footer"

export const DetalleCurso = () => {
    let title = window.location.pathname.split("/")[2]
    title = decodeURI(title)
    console.log(title)
    const questions = [
        "Contenido actualizado y relevante para la industria",
        "Proyectos prácticos y aplicables al mundo real",
        "Soporte personalizado de instructores expertos",
        "Certificado de finalización reconocido en la industria",
        "Acceso a una comunidad de estudiantes y profesionales"
    ]
    const courses = [
        {
            title: "Computación",
            description: "Aprende las habilidades esenciales de informática para el mundo laboral moderno.",
            duration: "3 meses",
            students: 20,
            startDate: "10/1/2024",
            instructor: "Profesor A",
            detalle_instructor: "El profesor A es un experto en computación y programación, con experiencia en el campo de la programación de aplicaciones web y de escritorio.",
            icon: <FontAwesomeIcon icon={faLaptop} className="h-8 w-8 text-blue  mr-2" />
        },
        {
            title: "Diseño Gráfico",
            description: "Domina las herramientas de diseño y crea impactantes piezas visuales.",
            duration: "4 meses",
            students: 15,
            startDate: "10/15/2024",
            instructor: "Profesor B",
            detalle_instructor: "El profesor B es un experto en programación y diseño de interfaces. Con experiencia en el campo de la programación de interfaces de usuario.",
            icon: <FontAwesomeIcon icon={faPenNib} className="h-8 w-8 text-blue  mr-2" />
        },
        {
            title: "Asistente Administrativo",
            description: "Prepárate para roles de apoyo administrativo en diversos sectores empresariales.",
            duration: "3 meses",
            students: 25,
            startDate: "12/1/2024",
            instructor: "Profesor C",
            detalle_instructor: "El profesor C tiene experiencia de la industria en roles de apoyo administrativo. Con una amplia experiencia trabajando en el sector financiero.",
            icon: <FontAwesomeIcon icon={faBriefcase} className="h-8 w-8 text-blue  mr-2" />
        },
        {
            title: "Marketing Digital",
            description: "Aprende a promocionar negocios y productos en el entorno digital.",
            duration: "4 meses",
            students: 20,
            startDate: "11/15/2024",
            instructor: "Profesor D",
            detalle_instructor: "El profesor E es un experto en publicidad y marketing. Con una amplia experiencia trabajando para grandes empresas a nivel nacional.",
            icon: <FontAwesomeIcon icon={faChartSimple} className="h-8 w-8 text-blue  mr-2" />
        },
        {
            title: "Publicidad",
            description: "Desarrolla estrategias publicitarias efectivas para diversos medios.",
            duration: "3 meses",
            students: 15,
            startDate: "12/1/2024",
            instructor: "Profesor E",
            detalle_instructor: "El profesor E es un experto en publicidad y marketing. Con una amplia experiencia trabajando para grandes empresas a nivel nacional.",
            icon: <FontAwesomeIcon icon={faBullhorn} className="h-8 w-8 text-blue mr-2" />
        }
    ]
    console.log(courses.filter((c) => c.title === title)[0].icon)
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <NavLink to="/cursos" className="text-md  font-semibold mb-8">Cursos &gt; {title} </NavLink>
                    <h1 className="md:text-4xl max-md:text-2xl mt-4 max-md:w-[90%] md:w-[40%] font-bold text-center mb-12 border-b-2  pb-4 w-[60%] border-blue mx-auto">
                        {title}</h1>
                    <p className="text-lg text-pretty">{courses.filter((c) => c.title === title)[0].description}</p>
                    <div className="grid max-md:grid-cols-1 md:grid-cols-3 mt-4 items-center gap-10">
                        <div className=" shadow-md  shadow-[#b4b4b4] p-8  rounded-lg">
                            <div className="flex items-center ">
                                <p className="text-xl font-bold items-center flex gap-4 text-pretty"> <FontAwesomeIcon icon={faClock} className="h-8 w-8 mr-2" /> Duración</p>
                            </div>
                            <p className="text-lg text-pretty mt-4">{courses.filter((c) => c.title === title)[0].duration}</p>
                        </div>
                        <div className=" shadow-md  shadow-[#b4b4b4]   p-8   rounded-lg">
                            <div className="flex items-center ">
                                <p className="text-xl font-bold items-center flex gap-4 text-pretty"> <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 mr-2" /> Fecha de Inicio</p>
                            </div>
                            <p className="text-lg text-pretty mt-4">{new Date(courses.filter((c) => c.title === title)[0].startDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                        <div className=" shadow-md  shadow-[#b4b4b4]  p-8   rounded-lg">
                            <div className="flex items-center ">
                                <p className="text-xl font-bold items-center flex gap-4 text-pretty"> <FontAwesomeIcon icon={faUsers} className="h-8 w-8 mr-2" /> Estudiantes</p>
                            </div>
                            <p className="text-lg text-pretty mt-4">{courses.filter((c) => c.title === title)[0].students} estudiantes inscritos</p>
                        </div>
                    </div>

                    <button className="bg-yellow text-black  px-4 font-medium py-2 rounded-lg mt-8 ">¡Inscribirse ahora!</button>

                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-4">Instructor del curso</h2>
                        <div className="flex items-center gap-4">
                            <img src="https://randomuser.me/api/portraits/men/1.webp" className="w-16 h-16 rounded-full" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold mt-4 mb-2">{courses.filter((c) => c.title === title)[0].instructor}</h3>
                                <p>{courses.filter((c) => c.title === title)[0].detalle_instructor}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-6">¿Por qué elegir este curso?</h2>
                        <div className="flex flex-col gap-6">
                            {questions.map((quest, i) => (
                                <div className="flex justify-start items-center gap-4 " key={i}>
                                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-700  " />
                                    <h3 className="text-md ">{quest}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
