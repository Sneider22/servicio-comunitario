import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBookOpen, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <FontAwesomeIcon icon={Icon} className="h-12 w-12 text-blue mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
)

export default function QuienesSomos() {
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto p-4 space-y-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="text-4xl max-md:text-3xl max-md:w-[70%] md:w-[40%] font-bold text-center mb-12 border-b-2 pb-6 w-[30%] border-blue mx-auto">Quiénes Somos</h1>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2 w-[20%] border-blue">Nuestra Historia</h2>
                        <p className="text-gray-700 mb-4 text-pretty">
                            El Centro de Capacitación Barrios Unidos de Petare tiene su origen más remoto en la presencia salesiana que estuvo en un barrio llamado La Agricultura, en Petare. Esta comunidad salesiana viendo la necesidad de formación integral y de capacitación para el trabajo en los jóvenes de las zonas populares de Petare, responde a esta problemática creando el Centro de Capacitación Laboral “Barrios Unidos” aproximadamente par el año 1994.
                        </p>
                        <p className="text-gray-700 mb-4  text-pretty">
                            Se dictaban talleres de computación, corte y costura, secretariado, entre otros; estos en diferentes sectores de Petare tales como 1º de noviembre, otro en el 12 de octubre, otro en el 5 de julio y otro en el 24 de julio; en capillas o espacios comunitarios. Siendo el primer director fue el padre Lorenzo Stocco.
                        </p>
                        <p className="text-gray-700 mb-4  text-pretty">Durante el año 2010 terminado el año escolar se ha pensado en buscar una sede neutral la cual pueda reunir a jóvenes de todos los barrios, ya que ha sido herido uno de los participantes del centro y los chicos de un barrio a otro no van por miedo a que le roben sus pertenencias o los agredan físicamente.</p>
                        <p className="text-gray-700 mb-4  text-pretty">Fue entonces en mayo del año 2010 gracias a la venida de la reliquia de Don Bosco a Venezuela, cuando un señor de buena voluntad (Sr. Humberto Díaz) conversa con el Padre Lorenzo Stocco y con el inspector de los salesianos en Venezuela y nos cede en comodato un edificio de tres pisos en una zona neutral de la Urbina, hay que destacar que el comodato se realizó por cinco años con la posibilidad de ser renovado, así mismo podemos destacar que el edificio se encontraba en muy mal estado y sin servicios públicos básicos, sin embrago tras muchas situaciones el Sr. Díaz pide al padre la mudanza inmediata al edificio o de lo contrario se perdería el comodato fue entonces en Noviembre de este año cuando el Edificio HD de la Urbina comenzó a ser un lugar donde los jóvenes de los barrios de petare, entre ellos: 1 de Noviembre, 19 de Abril, 12 de Octubre, 24 de Julio, 5 de Julio, Brisas de Turumo, La Alcabala, José Félix Rivas, San José, Casco Colonial de Petare, San Blas, Carpintero, El Torres, Maca, La Lucha, San Isidro, Mesuca, Caucaguita, La Línea, La Bombilla, San Miguel, San Guillermo, Ramón Brazon, La Cruz, y otras adyacencias de la Urbina, pudiesen encontrar Capacitación Laboral bajo el lema  “Capacitación para el Trabajo y Educación para la vida” Esto sobrepaso las expectativas; se han congregado en nuestra institución para recibir sus cursos en esta nueva sede la cual inicia sus actividades el 8 de Noviembre del año 2010 con una población de 100 jóvenes aproximadamente. En Julio del año 2011 se logra dar Certificación a la Primera Promoción para un total de 80 Jóvenes que lograron terminar sus horas curso.</p>
                        <p className="text-gray-700 mb-4  text-pretty"> El C.C.L. (Centro de Capacitación Laboral) comienza a ser conocido y muchos jóvenes inician la búsqueda de cupos y a mediados de septiembre del año 2011 se abre el proceso de inscripción ofreciendo Nueve (9) cursos en Horarios de mañana, tarde logrando tener para este momento alrededor de 120 Jóvenes capacitándose para el trabajo. Luego por el termino del comodato, en el año 2017(septiembre), pasamos a una nueva sede en las instalaciones del Centro Juvenil de Boleíta.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <FeatureCard
                            icon={faUsers}
                            title="Equipo Docente Calificado"
                            description="Contamos con profesionales expertos en sus áreas, comprometidos con la formación integral de nuestros estudiantes."
                        />
                        <FeatureCard
                            icon={faBookOpen}
                            title="Metodología Práctica"
                            description="Nuestros cursos combinan teoría y práctica, preparando a los estudiantes para los desafíos reales del mundo laboral y empresarial."
                        />
                        <FeatureCard
                            icon={faAward}
                            title="Reconocimiento"
                            description="Nuestros programas están avalados por instituciones educativas y empresariales de prestigio."
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2 w-[20%] border-blue">Nuestra Misión</h2>
                        <p className="text-gray-700 mb-4">
                            Somos una comunidad educativa pastoral que, con la presencia de Cristo vivo entre nosotros, educa para la vida a adolescentes y jóvenes dispuestos a capacitarse para el emprendimiento laboral, desde la promoción integral de la persona y con los nuevos desafíos que la sociedad venezolana nos impone, como aporte para la reconciliación y desarrollo del país, según el método de San Juan Bosco.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 mt-8 border-b-2 pb-2 w-[20%] border-blue">Nuestra Visión</h2>
                        <p className="text-gray-700">
                            Adolescentes y Jóvenes formados integralmente, con actitud positiva, esperanzadora y solidaria. Líderes para el cambio, la reconciliación y el desarrollo del país a través de una eficiente capacitación y motivación laboral, emprendedora y evangelizadora
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 mt-8 border-b-2 pb-2 w-[20%] border-blue">Nuestros Valores</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>El Anuncio del Evangelio de Jesucristo, en los caminos del acompañamiento de la fe cristiana.</li>
                            <li>La Fraternidad de una familia educativa que se inspira en el sistema preventivo de Don Bosco.</li>
                            <li>La Calidad en la Capacitación del Trabajo con el emprendimiento solidario de la pedagogía laboral.</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}