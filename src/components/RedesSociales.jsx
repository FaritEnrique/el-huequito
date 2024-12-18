import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const RedesSociales = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold mb-4">¡Síguenos en nuestras redes sociales!</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/profile.php?id=100057419862464&mibextid=LQQJ4d&_rdc=2&_rdr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-orange-400 text-3xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/tu-tienda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-orange-400 text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.twitter.com/tu-tienda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-orange-400 text-3xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedesSociales;