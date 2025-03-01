import React, { useEffect } from 'react';
import { useIdeas } from '../hooks/useIdeas';

const IdeasPage = () => {
    const { ideas, cargando, error, fetchIdeas } = useIdeas();

    useEffect(() => {
        fetchIdeas();
    }, [fetchIdeas]);

    if(cargando){
        return <p>Cargando Ideas</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        <main>
            {/* ... (resto del código) ... */}
            <div className='w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ring-2 gap-4 ring-slate-800 rounded-xl'>
                {ideas.map(idea => (
                    <div key={idea.id} className='flex flex-col ring-2 ring-slate-400 rounded-xl items-center justify-center'>
                        <img src={idea.photo} alt="Foto Combinación de Colores" className='rounded-xl border object-contain' />
                        <button className='hidden w-1/2 bg-blue-600 hover:bg-blue-200 rounded-lg my-2 text-white font-bold md:block'>Ampliar</button>
                    </div>
                ))}
            </div>
            {/* ... (resto del código) ... */}
        </main>
    );
};

export default IdeasPage;