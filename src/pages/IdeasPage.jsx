import React, { useState, useEffect } from 'react';
import { useIdeas } from '../hooks/useIdeas';

const IdeasPage = () => {
    const { ideas, cargando, error, fetchIdeas } = useIdeas();
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    useEffect(() => {
        fetchIdeas();
    }, []);

    if (cargando) {
        return <p>Cargando Ideas...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main>
            {/* Grid de imágenes */}
            <div className='w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ring-2 gap-4 ring-slate-800 rounded-xl'>
                {ideas.map(idea => (
                    <div key={idea.id} className='flex flex-col ring-2 ring-slate-400 rounded-xl items-center justify-center'>
                        <img 
                            src={idea.foto} 
                            alt="Foto Combinación de Colores" 
                            className='rounded-xl border object-contain cursor-pointer' 
                            onClick={() => setImagenSeleccionada(idea.foto)}
                        />
                        <button 
                            className='hidden w-1/2 bg-blue-600 hover:bg-blue-200 rounded-lg my-2 text-white font-bold md:block'
                            onClick={() => setImagenSeleccionada(idea.foto)}
                        >
                            Ampliar
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal de imagen ampliada */}
            {imagenSeleccionada && (
                <div 
                    className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
                    onClick={() => setImagenSeleccionada(null)}
                >
                    <div 
                        className='bg-white p-4 rounded-lg shadow-lg max-w-[600px] w-full mx-4 flex flex-col items-center'
                        onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
                    >
                        <img src={imagenSeleccionada} alt="Ampliado" className='w-full rounded-lg' />
                        <button 
                            className='mt-4 px-4 py-2 bg-red-600 text-white rounded-lg'
                            onClick={() => setImagenSeleccionada(null)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default IdeasPage;