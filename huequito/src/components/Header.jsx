import styles from '../styles/Header.module.css';
import { Link } from 'react-router';
import { LiaWindowClose } from "react-icons/lia";
import { useState } from 'react';


const Header = () => {

    const [abrir, setAbrir] = useState(false)

    const classMenu = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white max-w-[450px] text-gray-600'

    const classShowMenu = abrir ? 'translate-none' : 'translate-x-full'

    return (
        <header className={styles.contents}>
            <section className='w-full h-full flex items-end rounded'>
                <nav className="dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-10">
                        <Link to='/' className="flex items-center space-x-3">
                            <img src="/images/logos/logo_huequito.png" className="h-20 ring-2 ring-slate-700 rounded-xl" alt="Logo El Huequito" />
                        </Link>
                        <div>
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex border-2 
                            border-black items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 
                            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                            aria-controls="navbar-default" aria-expanded="false" onClick={() => setAbrir(!abrir)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                            <div className={`${classMenu} ${classShowMenu}`}>
                                <button onClick={() => setAbrir(false)}>
                                    <LiaWindowClose size={40} className='text-red-500'/>
                                </button>
                                <div className='w-[250px]'>
                                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/'>
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/nosotros'>
                                                Nosotros
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/productos'>
                                                Productos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/promociones'>
                                                Promociones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/ideas'>
                                                Ideas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/presupuestar'>
                                                Presupuestar
                                            </Link>
                                            <li>
                                            <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/contacto'>
                                                Contacto
                                            </Link>
                                        </li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hidden w-full md:block md:w-auto px-4 bg-gray-50 rounded-lg ring-2 ring-slate-700" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/nosotros' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/productos' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Productos
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/promociones' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Promociones
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/ideas' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Ideas
                                    </Link>
                                </li>
                                    <Link to='/presupuestar' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Presupuestar
                                    </Link>
                                <li>
                                    <Link to='/contacto' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>    
            </section>
        </header>
    )
}

export default Header