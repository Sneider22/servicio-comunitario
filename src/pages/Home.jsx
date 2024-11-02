import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Horario } from "../components/Horario"

export const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <div className="max-w-6xl mx-auto p-4 space-y-4">
                <Horario />
            </div>
        </div>
    )
}
