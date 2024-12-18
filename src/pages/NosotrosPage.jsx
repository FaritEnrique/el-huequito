import React from 'react'
import { VscCheckAll } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const NosotrosPage = () => {
  return (
    <main>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black p-4">
        <div className="w-full min-h-10 aspect-[1200/480] flex bg-nosotros1-background bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded-xl py-4 mb-4 justify-center">
          <div className='w-1/4 flex justify-center items-center p-2 '>
            <h1 className='font-lobster italic text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
              Los Precios Más Bajos
            </h1>
          </div>
          <h1 className='w-full py-2 font-extrabold font-playfair text-center text-white sm:text-xl md:text-3xl lg:text-4xl'
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
              Conoce nuestra pasión por el color y la creatividad
          </h1>
          <div className='w-1/4 flex justify-center items-center p-2'>
            <h1 className='font-lobster italic text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Desde 1994
            </h1> 
          </div>
        </div>
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/4 bg-slate-300 p-4 flex items-center rounded-xl'>
            <h1 className='w-full rounded-xl text-3xl text-center bg-yellow-50 font-bold font-cormorant text-gray-800 my-2'>
              Quienes Somos?
            </h1>
          </div>
          <div className='w-full lg:w-3/4 bg-slate-300 p-4 text-justify rounded-xl'>
            <p>
              Somos <strong>Almacenes El Huequito</strong>, un equipo apasionado por transformar cada rincón en una obra
              de arte. Desde nuestros inicios, nos hemos dedicado a ofrecer los mejores productos de pintura y decoración, 
              ayudando a nuestros clientes a expresar su creatividad y estilo único en sus espacios.
            </p>
            <br />
            <p>
            Nuestra misión es convertir tus ideas en realidad, brindándote productos de calidad y un servicio que inspire 
            confianza y satisfacción.              
            </p>      
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black p-4">
        <div className="w-full min-h-10 aspect-[1200/480] flex bg-nosotros2-background bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded-xl py-4 mb-4 justify-end">
          <div className='w-1/4 flex justify-center items-end p-2'>
            <h1 className='font-lobster italic text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Siempre Pensando en su Economía
            </h1> 
          </div>
        </div>
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/4 bg-slate-300 p-4 flex items-center rounded-xl'>
            <h1 className='w-full rounded-xl text-3xl text-center bg-yellow-50 font-bold font-cormorant text-gray-800 my-2'>
              Nuestra Historia
            </h1>
          </div>
          <div className='w-full lg:w-3/4 bg-slate-300 p-4 text-justify rounded-xl'>
            <p>
            Hace <strong>más de 27 años</strong>, comenzamos con la visión de ser más que una tienda de pintura.
            Queríamos ser un aliado para cada proyecto creativo, grande o pequeño. Desde entonces, hemos crecido,
            adaptándonos a las últimas tendencias y tecnologías para ofrecer una experiencia inigualable a nuestros clientes.
            </p>
            <br />
            <p>
              Hoy, somos líderes en el mercado gracias a la confianza que miles de personas han depositado en nosotros.
              Pero lo que más nos enorgullece es haber formado parte de innumerables historias de renovación y creatividad.              
            </p>      
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black p-4">
        <div className="w-full min-h-10 aspect-[1200/480] flex bg-nosotros3-background bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded-xl py-4 mb-4 justify-end">
          <div className='w-full flex justify-center items-center p-2'>
            <h1 className='font-lobster italic text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Colores que Inspiran, Calidad que Perdura
            </h1> 
          </div>
        </div>
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/4 bg-slate-300 p-4 flex items-center rounded-xl'>
            <h1 className='w-full rounded-xl text-3xl text-center bg-yellow-50 font-bold font-cormorant text-gray-800 my-2'>
              Qué Nos Hace Únicos?
            </h1>
          </div>
          <div className='w-full lg:w-3/4 bg-slate-300 p-4 text-justify rounded-xl text-xl'>
            <ul>
              <li>
                <div className='gap-4 flex'>
                  <VscCheckAll />
                  <p><strong className='mr-4'>Calidad superior:</strong>Trabajamos con las mejores marcas y materiales del mercado.</p>
                </div>
              </li>
              <li>
                <div className='gap-4 flex'>
                  <VscCheckAll />
                  <p><strong className='mr-4'>Variedad de opciones:</strong>Desde tonos clásicos hasta colores innovadores, siempre encontrarás lo que buscas.</p>
                </div>
              </li>
              <li>
                <div className='gap-4 flex'>
                  <VscCheckAll />
                  <p><strong className='mr-4'>Asesoramiento experto:</strong>Nuestro equipo está aquí para ayudarte a elegir el producto adecuado para tus proyectos.</p>
                </div>
              </li>
              <li>
                <div className='gap-4 flex'>
                  <VscCheckAll />
                  <p><strong className='mr-4'>Sostenibilidad:</strong>Nos preocupamos por el medio ambiente y ofrecemos opciones ecológicas que cuidan nuestro planeta.</p>
                </div>
              </li>
              <li>
                <div className='gap-4 flex'>
                  <VscCheckAll />
                  <p><strong className='mr-4'>Mejores Precios:</strong>Tenemos los mejores precios del mercado y se aplican descuentos a nuestros clientes frecuentes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black p-4">
        <div className="w-full min-h-10 aspect-[1200/480] flex bg-nosotros2-background bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded-xl py-4 mb-4 justify-end">
          <div className='w-3/4 flex justify-center items-end p-2'>
            <h1 className='font-lobster italic text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Conoce a las Personas Detrás de Nuestra Pasión
            </h1> 
          </div>
        </div>
        <div className='w-full ring-4 ring-slate-200 rounded-xl p-4 bg-slate-500 flex flex-wrap lg:flex-nowrap gap-4'>
          <div className='w-full lg:w-1/4 bg-slate-300 p-4 flex items-center rounded-xl'>
            <h1 className='w-full rounded-xl text-3xl text-center bg-yellow-50 font-bold font-cormorant text-gray-800 my-2'>
              Nuestro Equipo
            </h1>
          </div>
          <div className='w-full lg:w-3/4 bg-slate-300 p-4 text-justify rounded-xl'>
            <p>
              Nuestro equipo está compuesto por <strong>expertos en pintura y diseño</strong>, siempre listos para brindarte soluciones
              personalizadas. Cada uno de nosotros comparte el compromiso de ofrecer un servicio excepcional,
              porque sabemos que los detalles marcan la diferencia.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black p-4">
        <div className="w-full min-h-10 aspect-[1200/480] flex bg-nosotros4-background bg-contain bg-center bg-no-repeat
        ring-4 ring-slate-200 rounded-xl py-4 items-end">
          <div className='w-full flex justify-between items-end p-2'>
            <Link to='/productos' className='w-1/3'>
              <h1 className='w-full font-lobster italic bg-black text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl rounded-xl'
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                  Productos
              </h1>
            </Link>
            <Link to='/contacto' className='w-1/3'>
              <h1 className='w-full font-lobster italic bg-black text-white text-center font-bold text-xl sm:text-xl md:text-2xl lg:text-4xl rounded-xl'
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                  Contáctanos
              </h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NosotrosPage