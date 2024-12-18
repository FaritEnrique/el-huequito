import { Link } from "react-router-dom"
import { useState } from "react"
import { FaTimes } from "react-icons/fa";

const Footer = () => {

  const [ abrir, setAbrir ] = useState(false)

  const classLocation = 'fixed top-0 right-0 z-40 h-screen p-4 transition-transform bg-gray-200 w-full text-gray-600';
  const classShowLocation = abrir ? 'translate-none' : 'translate-x-full';

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Información */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Información</h3>
          <ul>
            <li><a href="/sobre-nosotros" className="text-gray-400 hover:text-orange-400">Sobre Nosotros</a></li>
            <li>
              <Link to='/preguntas-frecuentes' className="text-gray-400 hover:text-orange-400">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link to='/politica-de-privacidad' className="text-gray-400 hover:text-orange-400">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to='/login' className="text-gray-400 hover:text-orange-400">
                Administración
              </Link>
            </li>
          </ul>
        </div>
        {/* Productos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Productos</h3>
          <ul>
            <li><a href="/pinturas" className="text-gray-400 hover:text-orange-400">Pinturas</a></li>
            <li><a href="/accesorios" className="text-gray-400 hover:text-orange-400">Accesorios</a></li>
            <li><a href="/promociones" className="text-gray-400 hover:text-orange-400">Ofertas y Promociones</a></li>
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul>
            <li className="text-gray-400 hover:text-orange-400">
              <Link to='/contacto'>
                Formulario de Contacto
              </Link>
            </li>
            <li className="text-gray-400 hover:text-orange-400">
              <button
                onClick={() => setAbrir(!abrir)}>
                Ubicación
              </button>
              <div className={`${classLocation} ${classShowLocation}`}>
                <div className="w-full flex justify-end items-center">
                  <button 
                    onClick={() => setAbrir(false)}
                    className="p-2 ring-2 ring-slate-600 bg-white rounded-xl">
                    <FaTimes size={25} className="text-red-500" />
                  </button>
                </div>
                <div className="w-full mt-2 mx-auto max-w-[1200px] bg-black pb-4 rounded-xl">
                  <h1 className="text-center text-white font-bold md:text-xl lg:text-2xl">
                    CONTAMOS CON DOS LOCALES
                  </h1>
                  <div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                    <div className="w-full bg-slate-300 p-2 rounded-xl">
                      <h2 className="w-full font-bold text-center">Local Calle Arica</h2>
                      <div className="rounded-xl bg-white">
                        <div className="w-full flex gap-3 rounded-xl p-2">
                          <p>Dirección:</p><span>Calle Arica N° 851</span>
                        </div>
                        <div className="w-full flex gap-3 rounded-xl p-2">
                          <p>Teléfono:</p><span>+51 943 871 693</span>
                        </div>
                      </div>
                      <div className="w-full rounded-xl overflow-hidden aspect-video mt-4 border-2 border-black">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407.5836907623143!2d-73.24924790786484!3d-3.7561257546218934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea106bf3548c2b%3A0x53709165c995ff5a!2sArica%20851%2C%20Iquitos%2016001!5e0!3m2!1ses-419!2spe!4v1734478971609!5m2!1ses-419!2spe" 
                          className="w-full h-full"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"/>
                      </div>
                    </div>
                    <div className="w-full bg-slate-300 p-2 rounded-xl">
                      <h2 className="w-full font-bold text-center">Local Condamine / Yavarí</h2>
                      <div className="rounded-xl bg-white">
                        <div className="w-full flex gap-3 rounded-xl p-2">
                          <p>Dirección:</p><span>Esquina de Condamine / Yavarí</span>
                        </div>
                        <div className="w-full flex gap-3 rounded-xl p-2">
                          <p>Teléfono:</p><span>+51 943 871 693</span>
                        </div>
                      </div>
                      <div className="w-full rounded-xl overflow-hidden aspect-video mt-4 border-2 border-black">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407.6013712092315!2d-73.2432403780873!3d-3.7451474417589745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea10773b698b0b%3A0x96cf508c8d37a5bc!2sYavari%20419%2C%20Iquitos%2016002!5e0!3m2!1ses-419!2spe!4v1734478515355!5m2!1ses-419!2spe" 
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </li>
            <li><a href="/telefono" className="text-gray-400 hover:text-orange-400">Teléfono</a></li>
            <li><a href="/whatsapp" className="text-gray-400 hover:text-orange-400">WhatsApp</a></li>
          </ul>
        </div>
        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
          <ul>
            <li><a href="https://www.facebook.com/tu-tienda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">Facebook</a></li>
            <li><a href="https://www.instagram.com/tu-tienda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">Instagram</a></li>
            <li><a href="https://www.twitter.com/tu-tienda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400">Twitter</a></li>
          </ul>
        </div>
      </div>
      {/* Footer Inferior */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">&copy; 2024 Tu Tienda de Pinturas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer