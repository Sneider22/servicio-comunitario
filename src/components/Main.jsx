import { faBriefcase, faBullhorn, faChartSimple, faChevronLeft, faChevronRight, faLaptop, faPenNib } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Main = () => {

    // Por defecto la flecha de izquierda no se muestra y la derecha si
    // behavior: "smooth" 
    // smooth: Suaviza el desplazamiento

    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const handleScrollLeft = () => {
        const element = document.getElementById("cursos")
        // behavior: "smooth"

        if (element.scrollLeft === 0) {
            setShowLeftArrow(false)
            setShowRightArrow(true)
            document.getElementById("left").style.display = "none"
        } else {
            setShowLeftArrow(true)
            setShowRightArrow(true)
            document.getElementById("left").style.display = "none"
        }
        element.scrollLeft -= 200
    }

    const handleScrollRight = () => {
        const element = document.getElementById("cursos")
        if (element.scrollLeft === element.scrollWidth - element.offsetWidth) {
            setShowLeftArrow(false)
            setShowRightArrow(true)
            document.getElementById("left").style.display = "none"
        } else {
            setShowLeftArrow(true)
            setShowRightArrow(false)
            document.getElementById("left").style.display = "block"
        }
        element.scrollLeft += 200
    }

    return (
        <main className="h-[85vh] w-full bg-[url('/src/assets/Bg.webp')] bg-cover bg-center">
            <div className="md:ml-[5rem] max-md:ml-[2rem] md:w-[90%] h-full flex flex-col justify-center text-black max-sm:mt-16 ">
                <p className="bg-blue px-4 py-1 mb-1 max-md:w-[50%] md:w-[12rem] flex items-center justify-center text-white rounded-sm max-sm:text-xs">Cursos disponibles</p>
                <p className="mb-4 text-sm font-medium">Octubre 2024 - Febrero 2025</p>
                <h1 className="lg:text-4xl md:text-3xl font-bold mb-4 max-md:text-2xl ">Capacitamos para el trabajo <br /> y educamos para la vida</h1>
                <p className="lg:text-md mb-4 max-md:text-sm text-balance md:w-[40rem]">¡Desarrolla tus habilidades y potencia tu futuro con nuestros cursos en la Escuela para el Emprendimiento María Auxiliadora! Te invitamos a formar parte de nuestra oferta educativa del periodo   octubre 2024 - febrero 2025 en el Centro Don Bosco Boleita.</p>
                <NavLink to="/cursos" className="bg-yellow rounded-md px-4 w-64 py-2 text-center text-black font-bold">¡Conoce nuestros cursos!</NavLink>

                <h2 className="text-xl font-bold mt-8 mb-4">Cursos</h2>
                <div className="flex w-[80vw] items-center justify-start gap-4">
                    <FontAwesomeIcon id="left" className={showLeftArrow ? "hidden text-blue text-2xl" : "hidden"} onClick={() => handleScrollLeft()} icon={faChevronLeft} />
                    <div className="flex gap-4 max-md:overflow-x-scroll justify-start items-start" id="cursos">
                        <NavLink to="/cursos/Asistente Administrativo" className="flex flex-col gap-2 text-sm items-center text-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faBriefcase} />
                            </div>
                            Asist. Administrativo
                        </NavLink>

                        <NavLink to="/cursos/Computación" className="flex flex-col gap-2 text-sm items-center text-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faLaptop}></FontAwesomeIcon>
                            </div>
                            Computación
                        </NavLink>
                        <NavLink to="/cursos/Diseño Gráfico" className="flex flex-col gap-2 text-sm items-center text-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faPenNib}></FontAwesomeIcon>
                            </div>
                            Diseño Gráfico
                        </NavLink>
                        <NavLink to="/cursos/Marketing Digital" className="flex flex-col gap-2 text-sm items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faChartSimple}></FontAwesomeIcon>
                            </div>
                            Marketing Digital
                        </NavLink>
                        <NavLink to="/cursos/Publicidad" className="flex flex-col gap-2 text-sm items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-3xl" icon={faBullhorn}></FontAwesomeIcon>
                            </div>
                            Publicidad
                        </NavLink>

                    </div>
                    <FontAwesomeIcon id="right" className={showRightArrow ? "md:hidden text-blue text-2xl" : "hidden"} onClick={() => handleScrollRight()} icon={faChevronRight}></FontAwesomeIcon>
                </div>
            </div>
        </main>
    )
}
