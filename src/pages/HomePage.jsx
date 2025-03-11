import React, { useState } from 'react';
import VisibilityWrapper from '../hooks/VisibilityWrapper';
import '@fontsource/pacifico'; // Importación de fuente Pacifico
import '@fontsource/lobster'; // Importación de la fuente Lobster
import { TbPointFilled } from "react-icons/tb";
import CarruselMarcas from '../components/CarruselMarcas';
import VideoPlaceholder from '../pagesHelp/VideoPlaceholder';
import { Link } from 'react-router';
import { Helmet } from "react-helmet-async";

const HomePage = () => {

  return (
    <>
      <Helmet>
      <title>El Huequito - Pinturas en Iquitos</title>
        <meta name="description" content="Encuentra las mejores pinturas en El Huequito. Somos especialistas en pinturas decorativas, automotrices e industriales en Iquitos." />
        <meta name="keywords" content="El Huequito, Pinturas El Huequito, Almacenes El Huequito, Corporación Huequito, Pinturas Iquitos, Huequito Pinturas, Tienda de Pinturas" />
        <meta property="og:title" content="Pinturas - El Huequito - Pinturas en Iquitos" />
        <meta property="og:description" content="Compra pinturas de la mejor calidad en El Huequito." />
        <meta property="og:url" content="https://el-huequito.netlify.app/productos" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/imagen.png" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "El Huequito",
              "url": "https://el-huequito.netlify.app",
              "logo": "/public/images/logos/logo_huequito_fecha.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+51 954 855 550",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jirón Arica N° 851",
                "addressLocality": "Iquitos",
                "addressRegion": "Loreto",
                "postalCode": "16001",
                "addressCountry": "PE"
              }
            }
          `}
        </script>

      </Helmet>
      <section className="max-w-[800px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        <div className="max-w-[800px] w-full bg-white rounded-xl items-center">
          <Link to='/registro/cliente'>
            <img
              src="/images/backgrounds/Suscribirse.png"
              alt="Imagen para Registrarse"
              className='object-contain rounded-xl mx-auto'/>
          </Link>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        {/* Contenedor principal */}
        <div className="max-w-[1300px] w-full bg-white rounded-xl flex flex-col p-4 md:flex-row items-center">
          <div className="flex-col w-full text-center justify-items-center md:w-1/2">
            <h2 className="font-extrabold text-blue-900 text-2xl md:text-3xl lg:text-4xl mx-4">
              Los Especialistas en Pinturas te Ayudamos
            </h2>
            <img
              src="/images/logos/logo_huequito_fecha.png"
              alt="Logo El Huequito"
              className="w-1/2"
            />
            <h2 className="font-extrabold text-blue-900 text-2xl md:text-3xl lg:text-4xl my-2">
              Tenemos Muy Buenos Precios
            </h2>  
          </div>
          <div className="relative max-w-1/2 w-full md:w-1/2 flex items-center bg-red">
            <VideoPlaceholder/>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        {/* Contenedor principal */}
        <div className="max-w-[1300px] w-full bg-gradient-to-br from-orange-500 via-yellow-300 to-yellow-100 rounded-xl flex flex-col md:flex-row items-center">
          <div className="flex-col w-full text-center md:text-center justify-items-center md:w-1/2">
            <h2 className="font-extrabold text-blue-900 text-xl md:text-2xl lg:text-3xl mt-4 mx-4">
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
        <VisibilityWrapper>
          <div className='w-full rounded-xl md:px-4'>
            <p className="w-full sm:text-xl md:text-2xl lg:text-4xl text-center text-blue-500 transform rotate-[-2deg] origin-top-center py-2">
              Los Colores son Emociones; Elige Pintar Felicidad
            </p>
          </div>
        </VisibilityWrapper>
        <div className='w-full my-4'>
          <p className='font-bold text-center'>
            Tipos de Productos
          </p>
        </div>
        <div className='w-full p-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pintura Decorativa:
              </Link>
              <span className='text-justify lg:pl-2'>
                Estas pinturas son las que se utilizan para el pintado de viviendas, es decir interiores y exteriores. Nuestra empresa cuenta con una amplia variedad de colores en diferentes marcas.
              </span>
            </h3>
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
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pintura Automotriz:
              </Link>
              <span className='text-justify lg:pl-2'>
                Estas pinturas son las que se utilizan para el pintado de vehículos automotores, mototaxis o motos lineales. Nuestra empresa, cuenta con un variado stock de colores, también realizamos el matizado de los mismos.
              </span>
            </h3>
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
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Pintura Industrial:
              </Link>
              <span className='text-justify lg:pl-2'>
                La pintura industrial se utiliza para proteger y embellecer superficies que están expuestas a 
                condiciones adversas. Se utiliza como recubrimiento protector para maquinaria, equipos industriales y 
                vehículos. Estos recubrimientos proporcionan una capa adicional de protección contra el desgaste, y 
                la abrasión.
              </span>
            </h3>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Esmalte Epóxico
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Esmalte Sintético
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Zincromato
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/foto_pintura_industrial.png" alt="Foto Pintura Industrial" className='object-contain rounded-lg' />
          </div>
        </div>
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Productos para Madera:
              </Link>
              <span className='text-justify lg:pl-2'>
                Los productos para madera se utilizan para tratar, proteger, conservar y decorar la madera.
              </span>
            </h3>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Barniz
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Laca Piroxilina
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Tinte para Madera
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Laca Selladora
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/productos_madera.png" alt="Foto Pintura Industrial" className='object-contain rounded-lg' />
          </div>
        </div>
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Selladores:
              </Link>
              <span className='text-justify lg:pl-2'>
                Prepara y protege tus superficies con nuestros selladores de alta calidad. Ideal para muros de 
                concreto, yeso y drywall, mejora la adherencia de la pintura y evita la absorción desigual.
                Su fórmula resistente al agua y de secado rápido garantiza un acabado uniforme y duradero.
                Los selladores para madera sella los poros, realza la belleza natural de la madera y la protege 
                contra la humedad y el desgaste.
                Perfecto para muebles, puertas y pisos de madera, garantiza un acabado liso y uniforme, 
                facilitando la aplicación de barnices o pinturas. ¡Logra un acabado impecable con la mejor protección!
              </span>
            </h3>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Base Decorativa
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Sellador para Pared e Imprimantes
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Base al Aceite
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/foto_selladores.png" alt="Foto Pintura Industrial" className='object-contain rounded-lg' />
          </div>
        </div>
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Disolventes:
              </Link>
              <span className='text-justify lg:pl-2'>
                Los disolventes para pinturas se utilizan para diluir y mezclar pinturas, y para limpiar herramientas 
                y superficies.
              </span>
            </h3>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Thiner Acrílico
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Disolvente Epóxico
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Disolvente para Tráfico
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/disolventes.png" alt="Foto Pintura Industrial" className='object-contain rounded-lg' />
          </div>
        </div>
        <div className='w-full p-2 my-2 md:p-6 flex flex-wrap items-center border-2 border-blue-300 bg-slate-200 rounded-lg'>
          <div className='w-full md:w-3/4 md:pr-2'>
            <h3 className='w-full m-auto flex flex-wrap'>
              <Link to='/productos' className='font-semibold'>
                Otros Productos
              </Link>
              <span className='text-justify lg:pl-2'>
                Tenemos productos de todo tipo para pintura y mantenimiento de los hogares.
              </span>
            </h3>
            <ul className='pt-1 space-y-1'>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Cola sintética
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Brochas y rodillos
              </li>
              <li className="flex items-center pl-2">
                <TbPointFilled className="text-black text-2xl mr-2" />
                Bandejas entre otros
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4'>
            <img src="/images/fotosProductos/brochas.png" alt="Foto Pintura Industrial" className='object-contain rounded-lg' />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage