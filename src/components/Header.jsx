/*import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { LiaWindowClose } from "react-icons/lia";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Header = () => {
    const [abrir, setAbrir] = useState(false);

    // Define las clases del menú lateral y la lógica para su visibilidad
    const classMenu = 'fixed top-0 right-0 z-40 h-screen p-4 transition-transform bg-white max-w-[450px] text-gray-600';
    const classShowMenu = abrir ? 'translate-none' : 'translate-x-full';

    return (
        <header className={styles.contents}>
            <section className='w-full h-full flex items-end rounded'>
                <nav className="dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-10">
                        /* Logo */
                        /*
                        <Link to='/' className="flex items-center space-x-3">
                            <img src="/images/logos/logo_huequito.png" className="h-20 ring-2 ring-slate-700 rounded-xl" alt="Logo El Huequito" />
                        </Link>*/

                        /* Botón para abrir/cerrar el menú en dispositivos móviles */
                        /*<div>
                            <button
                                type="button"
                                className="inline-flex border-2 border-black items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default"
                                aria-expanded="false"
                                onClick={() => setAbrir(!abrir)} // Cambia el estado al hacer clic
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>*/

                            /* Menú lateral desplegable */
                            /*<div className={`${classMenu} ${classShowMenu}`}>
                                /* Botón para cerrar el menú */
                                /*<button onClick={() => setAbrir(false)}>
                                    <LiaWindowClose size={40} className='text-red-500' />
                                </button>
                                <div className='w-[250px]'>*/
                                    /* Lista de enlaces del menú lateral */
                                    /*<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                        {['Inicio', 'Nosotros', 'Productos', 'Promociones', 'Ideas', 'Presupuestar', 'Contacto'].map((item) => (
                                            <li key={item}>
                                                {item.toLowerCase() === 'inicio' ? (
                                                    <Link
                                                        to="/"
                                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                                        onClick={() => setAbrir(false)}
                                                    >
                                                        {item}
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        to={`/${item.toLowerCase()}`}
                                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                                        onClick={() => setAbrir(false)} // Cierra el menú al hacer clic
                                                    >
                                                        {item}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>*/

                        /* Menú para pantallas grandes */
                        /*<div className="hidden w-full md:block md:w-auto px-4 bg-gray-50 rounded-lg ring-2 ring-slate-700" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {['Inicio', 'Nosotros', 'Productos', 'Promociones', 'Ideas', 'Presupuestar', 'Contacto'].map((item) => (
                                    <li key={item}>
                                        {item.toLowerCase() === 'inicio' ? (
                                            <Link
                                                to="/"
                                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            >
                                                {item}
                                            </Link>
                                        ) : (
                                            <Link
                                                to={`/${item.toLowerCase()}`}
                                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            >
                                                {item}
                                            </Link>
                                        )}   
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Header;*/

import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { LiaWindowClose } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Header = () => {
    const [abrir, setAbrir] = useState(false);
    const classMenu = abrir ? "fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-end z-50" : "hidden";
    const classShowMenu = abrir ? "w-[300px] h-full bg-white p-4 shadow-lg" : "";

    return (
        <>
            <section className="w-full">
                <nav className="dark:bg-gray-900 w-full">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="/images/logos/logo_huequito.png"
                                className="h-20 ring-2 ring-slate-700 rounded-xl"
                                alt="Logo El Huequito"
                            />
                        </Link>

                        <div>
                            <button
                                type="button"
                                className="inline-flex border-2 border-black items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="navbar-default"
                                aria-expanded="false"
                                onClick={() => setAbrir(!abrir)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>

                            <div className={`${classMenu} ${classShowMenu}`}>
                                <button onClick={() => setAbrir(false)}>
                                    <LiaWindowClose size={40} className="text-red-500" />
                                </button>
                                <div className="w-[250px]">
                                    <ul className="font-medium flex flex-col p-4 border border-gray-400 rounded-lg bg-gray-300">
                                        {["Inicio", "Nosotros", "Productos", "Promociones", "Ideas", "Contacto"].map((item) => (
                                            <li key={item}>
                                                <Link
                                                    to={item.toLowerCase() === "inicio" ? "/" : `/${item.toLowerCase()}`}
                                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                                                    onClick={() => setAbrir(false)}
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden w-full md:block md:w-auto px-4 bg-gray-50 rounded-lg ring-2 ring-slate-700">
                        <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8">
                            {["Inicio", "Nosotros", "Productos", "Promociones", "Ideas", "Contacto"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase() === "inicio" ? "/" : `/${item.toLowerCase()}`}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </section>

            <header className="w-full flex justify-center bg-gray-200">
                <div className="max-w-[1300px] w-full h-auto">
                    <Swiper
                        navigation={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        modules={[Navigation, Autoplay]}
                        className="w-full h-auto"
                    >
                        <SwiperSlide>
                            <img src="/images/backgrounds/background header 1.png" alt="Imagen 1" className="w-full h-auto object-contain" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/backgrounds/background header 2.png" alt="Imagen 2" className="w-full h-auto object-contain" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/backgrounds/fondo_encabezado_header.jpg" alt="Imagen 3" className="w-full h-auto object-contain" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </header>
        </>
    );
};

export default memo(Header);