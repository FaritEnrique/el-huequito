import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Información */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Información</h3>
          <ul>
            <li><a href="/sobre-nosotros" className="text-gray-400 hover:text-orange-400">Sobre Nosotros</a></li>
            <li><a href="/preguntas-frecuentes" className="text-gray-400 hover:text-orange-400">Preguntas Frecuentes</a></li>
            <li>
              <Link to='/politica-de-privacidad' className="text-gray-400 hover:text-orange-400">
                Política de Privacidad
              </Link>
            </li>
            <li><a href="/terminos-y-condiciones" className="text-gray-400 hover:text-orange-400">Términos y Condiciones</a></li>
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
            <li><a href="/contacto" className="text-gray-400 hover:text-orange-400">Formulario de Contacto</a></li>
            <li><a href="/ubicacion" className="text-gray-400 hover:text-orange-400">Ubicación</a></li>
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