import { NavLink } from "react-router-dom"
import { Footer } from "./Footer"
export const Horario = () => {
    const shifts = [
        {
            title: "Turno Mañana",
            time: "8:00 am - 12:00 pm",
            bgColor: "bg-yellow",
            image: "./../assets/Main.png",
            courses: [
                "Computación",
                "Diseño Gráfico",
                "Asistente Administrativo",
                "Marketing Digital",
            ]
        },
        {
            title: "Turno Tarde",
            time: "1:30 pm - 5:00 pm",
            bgColor: "bg-blue",
            image: "./../assets/Cursos.png",
            courses: [
                "Computación",
                "Diseño Gráfico",
                "Asistente Administrativo",
                "Publicidad",
                "Marketing Digital"
            ]
        }
    ]


    const Button = ({ children, className, ...props }) => (
        <button
            className={`px-4 py-2 rounded font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    )

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                {shifts.map((shift, index) => (
                    <div
                        key={shift.title}
                        className={`${shift.bgColor} rounded-lg overflow-hidden`}
                    >
                        <div className="aspect-video relative  ">
                            <img
                                src={shift.image}
                                alt="Students in classroom"
                                className="object-fill w-full h-full"
                            />
                        </div>
                        <div className={`p-6 ${index === 0 ? "text-black" : "text-white"}`}>
                            <div className="flex items-center gap-2 mb-4 justify-between w-full">
                                <h2 className="text-2xl font-bold " >{shift.title}</h2>
                                <ul>
                                    <li className="font-medium  list-disc w-full">{shift.time}</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Cursos Disponibles</h3>
                                <ul className="space-y-2">
                                    {shift.courses.map((course) => (
                                        <li key={course} className="flex items-center gap-2">
                                            <span className="text-lg">• {course}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-blue text-white p-6 rounded-lg text-center">
                <p className="text-lg">
                    ¡No pierdas esta oportunidad de crecer y emprender con nosotros!
                </p>
                <p className="text-lg">
                    Inscripciones abiertas. Para más información contáctanos y asegura tu lugar.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                        <div>
                            <h2 className=" text-sm font-medium text-blue">Escuela para el Emprendimiento</h2>
                            <h1 className="text-3xl font-bold text-gray-900">María Auxiliadora</h1>
                        </div>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <NavLink to="/contacto" >
                            <Button variant="default" className="mt-4 bg-amber-400 hover:bg-amber-500 text-black">
                                Conócenos más
                            </Button>
                        </NavLink>
                    </div>
                    <div className="grid grid-cols-2 gap-4 relative">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`relative ${i === 2 ? "col-span-2 " : ""}`}>
                                <img
                                    src="/src/assets/Main.png"
                                    alt={`School image ${i + 1}`}
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}