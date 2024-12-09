import React from 'react';
import '@fontsource/pacifico'; // Importación de fuente Pacifico
import '@fontsource/lobster'; // Importación de la fuente Lobster
import { TbPointFilled } from "react-icons/tb";
import CarruselMarcas from '../components/CarruselMarcas';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        {/* Contenedor principal */}
        <div className="max-w-[1300px] w-full bg-white rounded-xl flex flex-col p-4 md:flex-row items-center">
          <div className="flex-col w-full text-center md:text-center justify-items-center md:w-1/2">
            <h2 className="font-extrabold text-blue-900 font-pacifico text-2xl md:text-3xl lg:text-4xl mt-4 mx-4">
              Los Especialistas en Pinturas te Ayudamos
            </h2>
            <img
              src="/images/logos/logo_huequito_fecha.png"
              alt="Logo El Huequito"
              className="w-3/4"
            />
            <h2 className="font-extrabold text-blue-900 font-pacifico text-2xl md:text-3xl lg:text-4xl my-2">
              Tenemos Muy Buenos Precios
            </h2>  
          </div>
          {/* <div className='w-full rounded-xl md:w-1/2 flex justify-center aspect-w-16 aspect-h-9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3qYJk307Po?si=zZLcXDVQDbvlXYgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl object-contain'></iframe>
          </div> */}
          <div className="relative max-w-1/2 w-full md:w-1/2 pb-[56.25%]">
            <iframe 
              src="https://www.youtube.com/embed/Z3qYJk307Po?si=zZLcXDVQDbvlXYgs" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen 
              className='absolute top-0 left-0 w-full h-full rounded-xl'
            />
          </div>
        </div>
      </section>
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
      <section className="max-w-[1300px] w-full mx-auto my-4 pt-4 px-2 md:px-4 flex flex-wrap rounded-xl border-2 border-black bg-white">
        
        <div className='w-full rounded-xl md:px-4'>
          <p className="w-full font-lobster sm:text-xl md:text-2xl lg:text-4xl text-center text-blue-500 transform rotate-[-2deg] origin-top-center py-2">
            Los Colores son Emociones; Elige Pintar Felicidad
          </p>
        </div>
        <div className='w-full my-4'>
          <p className='font-bold text-center'>
            Tipos de Productos
          </p>
        </div>
        <div className='w-full p-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <p className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pintura Decorativa:
              </Link>
              <span className='text-justify lg:pl-2'>
                Estas pinturas son las que se utilizan para el pintado de viviendas, es decir interiores y exteriores. Nuestra empresa cuenta con una amplia variedad de colores en diferentes marcas.
              </span>
            </p>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Mate
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Satinado
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/foto_pintura_exterior.png" alt="Foto Pintado Exterior" className='object-contain rounded-lg' />
          </div>
        </div>
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <p className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pintura Automotriz:
              </Link>
              <span className='text-justify lg:pl-2'>
                Estas pinturas son las que se utilizan para el pintado de vehículos automotores, mototaxis o motos lineales. Nuestra empresa, cuenta con un variado stock de colores, también realizamos el matizado de los mismos.
              </span>
            </p>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Acrílico
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Esmalte Acrílico
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/foto_pintura_automotriz2.png" alt="Foto Pintura Automotriz" className='object-contain rounded-lg' />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage