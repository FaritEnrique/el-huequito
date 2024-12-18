import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    return (
        <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2
        border-black">
            <section className='w-full max-w-[1200px] mx-auto flex flex-wrap justify-between rounded-lg bg-slate-200 px-4 py-4'>
                <div>
                    <Link to='/edit-preg'>
                        <button className='font-bold text-center text-white bg-sky-500 p-2 rounded-xl border-2 border-black'>
                            Editar Preguntas
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/admin/promociones'>
                        <button className='font-bold text-center text-white bg-sky-500 p-2 rounded-xl border-2 border-black'>
                            Gestión Promociones
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/manage/messages'>
                        <button className='font-bold text-center text-white bg-sky-500 p-2 rounded-xl border-2 border-black'>
                            Gestión de Mensajes
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default AdminPage