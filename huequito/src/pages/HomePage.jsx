import React from 'react';
import '@fontsource/pacifico'; // Importación de fuente
import CarruselMarcas from '../components/CarruselMarcas';

const HomePage = () => {
  return (
    <>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        {/* Contenedor principal */}
        <div className="max-w-[1300px] w-full bg-gradient-to-br from-orange-500 via-yellow-300 to-yellow-100 rounded-xl flex flex-col md:flex-row items-center">
          <div className="flex-col w-full text-center md:text-center justify-items-center md:w-1/2">
            <h2 className="font-extrabold text-blue-900 font-pacifico text-xl md:text-2xl lg:text-3xl mt-4 mx-4">
              Pintar es Transformar tu Hogar en un Reflejo de tus Sueños
            </h2>
            <img
              src="/images/dibujos/marcas-sin-fondo.png"
              alt="Logo El Huequito"
              className="w-3/4 md:w-1/2 lg:w-1/3"
            />
          </div>
          <div className='w-full rounded-r-xl md:w-1/2'>
            <CarruselMarcas/>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage