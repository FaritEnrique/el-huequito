import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    return (
        <main className="max-w-[1300px] w-full mx-auto my-4 py-8 flex bg-slate-700 rounded-xl border-2
        border-black">
            <section className='w-full max-w-[1200px] mx-auto flex-wrap rounded-lg bg-slate-200 px-4 py-4'>
                <div className='w-1/2 font-bold text-center bg-sky-500 p-2 rounded-xl md:w-1/4'>
                    <Link to='/edit-preg'>
                        Editar Preguntas
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default AdminPage