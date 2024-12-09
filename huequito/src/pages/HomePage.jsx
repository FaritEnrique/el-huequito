import React from 'react';
import '@fontsource/pacifico'; // Importación de fuente Pacifico
import '@fontsource/lobster'; // Importación de la fuente Lobster
import CarruselMarcas from '../components/CarruselMarcas';
import { Link } from 'react-router';

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
          <div className='w-full rounded-xl md:w-1/2'>
            <CarruselMarcas/>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black bg-white">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3qYJk307Po?si=zZLcXDVQDbvlXYgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='w-full rounded-xl p-2'>
          <p className="w-full font-lobster sm:text-xl md:text-2xl lg:text-4xl text-center text-blue-500 transform rotate-[-2deg] origin-top-center py-2">
            Los Colores son Emociones; Elige Pintar Felicidad
          </p>
        </div>
        <div className='w-full'>
          <p className='font-bold text-center'>
            Tipos de Productos
          </p>
        </div>
        <div className='w-full px-2 md:px-4'>
          <div className='w-3/4'>
            <p className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pinturas Decorativas:
              </Link>
              <span className='text-justify'>
                Estas pinturas, son las que se utilizan para el pintado de viviendas, es decir interiores y exteriores
              </span>
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default HomePage