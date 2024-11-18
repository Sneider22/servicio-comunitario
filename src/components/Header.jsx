import { NavLink } from 'react-router-dom';
import Logo from '/src/assets/Logo.webp';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faContactBook, faGraduationCap, faHome, faQuestion, faQuoteLeft, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
const headerMobile = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll hacia abajo
                setIsVisible(false);
            } else {
                // Scroll hacia arriba
                setIsVisible(true);
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Para evitar que se vuelva negativo
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);
    return (
        <nav className={` fixed top-0 left-0 right-0  z-20 bg-white transition ease-in duration-200 p-4 text-black ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
            <div className="flex justify-between items-center">
                <NavLink to="/" className="text-lg max-sm:text-sm ml-[1rem] font-bold flex items-center justify-center gap-4">
                    <img loading='lazy' src={Logo} className="w-16 h-16 rounded-full" alt="" />
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
                    window.location.pathname === '/cursos' || window.location.pathname === `/cursos/${window.location.pathname.split("/")[2]}` ? 'py-2 px-5 bg-yellow bg-opacity-40 rounded-md ' : ''
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
