import NotFound from "./pages/404"
import { Home } from "./pages/Home"
import Cursos from "./pages/Courses"
import Testimonios from "./pages/Testimonios"
import PreguntasFrecuentes from "./pages/FAQ"
import Contacto from "./pages/Contacto"
import QuienesSomos from "./pages/QuienesSomos"
import { DetalleCurso } from "./pages/DetalleCurso"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./hooks/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
        <Route path="/cursos" element={<Cursos />}></Route>
        <Route path="/testimonios" element={<Testimonios />}></Route>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/cursos/:curso" element={<DetalleCurso />}></Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </Router>
  )
}

export default App
