import { NavLink } from 'react-router-dom';
import Logo from '/src/assets/Logo.png';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faContactBook, faGraduationCap, faHome, faQuestion, faQuoteLeft, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
const headerMobile = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-700 p-4 text-black">
            <div className="flex justify-between items-center">
                <NavLink to="/" className="text-lg ml-[1rem] font-bold flex items-center justify-center gap-4">
                    <img src={Logo} className="w-16 h-16 rounded-full" alt="" />
                    Escuela María Auxiliadora
                </NavLink>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'flex flex-col h-[80vh] w-full items-center justify-center' : 'hidden'} mt-4 md:flex md:mt-0 md:justify-between gap-4`}>
                <NavLink to="/" className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`}> <FontAwesomeIcon icon={faHome} className="text-md "></FontAwesomeIcon> Inicio</NavLink>
                <NavLink className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`} to="/quienes-somos"> <FontAwesomeIcon icon={faUsers} className="text-md " />Quienes somos</NavLink>
                <NavLink className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`} to="/cursos"><FontAwesomeIcon icon={faGraduationCap} className="text-md " />Cursos</NavLink>
                <NavLink className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`} to="/testimonios"><FontAwesomeIcon icon={faQuoteLeft} className="text-md " />Testimonios</NavLink>
                <NavLink className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`} to="/preguntas-frecuentes"><FontAwesomeIcon icon={faQuestion} className="text-md " /> Preguntas Frecuentes</NavLink>
                <NavLink className={`flex items-center  justify-start gap-4 shadow-md  w-[70%] px-4 py-2`} to="/contacto"><FontAwesomeIcon icon={faContactBook} className="text-md " />Contacto</NavLink>
            </div>
        </nav>
    );
};


function headerDesktop() {
    return (
        <header className="bg-white shadow-sm p-4 h-[15vh] shadow-[#00000048] flex items-center   px-24 py-9 justify-between sticky top-0 z-20">
            <NavLink to="/" className="flex items-center">
                <img className="mx-auto h-20 rounded-full" src={Logo} alt="" />
            </NavLink>
            <ul className="flex space-x-4 items-center">
                <NavLink className={
                    window.location.pathname === '/' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/">Inicio</NavLink>
                <NavLink className={
                    window.location.pathname === '/quienes-somos' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/quienes-somos">Quienes somos</NavLink>
                <NavLink className={
                    window.location.pathname === '/cursos' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/cursos">Cursos</NavLink>
                <NavLink className={
                    window.location.pathname === '/testimonios' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/testimonios">Testimonios</NavLink>
                <NavLink className={
                    window.location.pathname === '/preguntas-frecuentes' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
                <NavLink className={
                    window.location.pathname === '/contacto' ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
                } to="/contacto">Contacto</NavLink>
            </ul>
        </header>
    )
}

export const Header = () => {
    const isMobile = window.innerWidth < 768;
    return (isMobile ? headerMobile() : headerDesktop());
}
