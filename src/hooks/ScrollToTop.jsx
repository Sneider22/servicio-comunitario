import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar al inicio de la página
    }, [pathname]); // Cada vez que cambia la ruta, se ejecuta el efecto

    return null; // Este componente no renderiza nada
};

export default ScrollToTop;
