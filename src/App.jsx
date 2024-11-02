import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./pages/404"
import { Home } from "./pages/Home"
import Cursos from "./pages/Courses"
import Testimonios from "./pages/Testimonios"
import PreguntasFrecuentes from "./pages/FAQ"
import Contacto from "./pages/Contacto"
import QuienesSomos from "./pages/QuienesSomos"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
        <Route path="/cursos" element={<Cursos />}></Route>
        <Route path="/testimonios" element={<Testimonios />}></Route>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
