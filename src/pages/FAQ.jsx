import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={onClick}
            >
                <span className="text-lg font-semibold">{question}</span>
                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-blue-500" />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-blue-500" />
                )}
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-600">{answer}</p>
            )}
        </div>
    )
}

export default function PreguntasFrecuentes() {
    const faqs = [
        {
            question: "¿Cuál es la duración de los cursos?",
            answer: "La duración de nuestros cursos varía entre 3 y 4 meses, dependiendo del programa específico. Cada curso está diseñado para proporcionar una formación completa y práctica en el área de estudio."
        },
        {
            question: "¿Se otorga algún certificado al finalizar el curso?",
            answer: "Sí, al completar satisfactoriamente el curso, los estudiantes reciben un certificado oficial de la Escuela para el Emprendimiento María Auxiliadora, avalado por instituciones educativas y empresariales reconocidas."
        },
        {
            question: "¿Cuáles son los requisitos para inscribirse?",
            answer: "Los requisitos varían según el curso, pero generalmente incluyen ser mayor de 18 años, tener estudios secundarios completos y, en algunos casos, conocimientos básicos en el área de estudio.   Para más detalles, por favor consulta la información específica de cada curso."
        },
        {
            question: "¿Ofrecen modalidad online o solo presencial?",
            answer: "Actualmente, ofrecemos cursos en modalidad presencial y algunos en formato híbrido (combinando clases presenciales y online). Estamos trabajando en ampliar nuestra oferta de cursos completamente online en el futuro próximo."
        },
        {
            question: "¿Hay opciones de financiamiento o becas disponibles?",
            answer: "Sí, ofrecemos diferentes opciones de pago y financiamiento. También contamos con un programa de becas para estudiantes destacados o con necesidades económicas. Te invitamos a contactar a nuestro equipo de admisiones para más información sobre estas opciones."
        }
    ]

    const [openQuestion, setOpenQuestion] = useState(null);

    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4  bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 py-16 ">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[90%] md:w-[60%] font-bold text-center mb-12 border-b-2 pb-6 w-[70%] border-blue mx-auto">Preguntas Frecuentes</h1>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                {...faq}
                                isOpen={openQuestion === index}
                                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-semibold mb-4">¿Tienes más preguntas?</h2>
                        <p className="text-gray-700 mb-8">
                            No dudes en contactarnos. Estamos aquí para ayudarte.
                        </p>
                        <a
                            href="/contacto"
                            className="bg-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}