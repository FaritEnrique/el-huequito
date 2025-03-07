import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useIdeas } from '../hooks/useIdeas';
import ModalIdea from '../components/ModalIdea';
import IdeaForm from '../components/IdeaForm';

const GestionIdeasPage = () => {
    const navigate = useNavigate();
    const { ideas, cargando, error, crearIdea, actualizarIdea, removeIdea } = useIdeas();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIdea, setSelectedIdea] = useState(null);

    const handleEdit = (idea) => {
        setSelectedIdea(idea);
        setModalOpen(true);
    };

    const handleCreate = () => {
        setSelectedIdea(null);
        setModalOpen(true);
    };

    const handleSave = async (idea) => {
        try {
            if (selectedIdea) {
                await actualizarIdea(selectedIdea.id, idea);
                Swal.fire('Éxito', 'Idea actualizada correctamente', 'success');
            } else {
                await crearIdea(idea);
                Swal.fire('Éxito', 'Idea creada correctamente', 'success');
            }
            setModalOpen(false);
        } catch (error) {
            Swal.fire('Error', 'Hubo un problema al guardar la idea', 'error');
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            Swal.fire('Error', 'ID de idea inválido', 'error');
            return;
        }

        const confirm = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirm.isConfirmed) {
            try {
                await removeIdea(id);
                Swal.fire('Eliminado', 'La idea ha sido eliminada', 'success');
            } catch (error) {
                Swal.fire('Error', 'No se pudo eliminar la idea', 'error');
            }
        }
    };

    return (
        <main className='max-w-4xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-4'>Gestión de Ideas</h1>
            <div>
                <button onClick={handleCreate} className='mb-4 px-4 py-2 bg-green-500 text-white rounded-lg'>
                    Nueva Idea
                </button>
                <button onClick={() => navigate('/admin')} className='mb-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg'>
                    Regresar
                </button>
            </div>
            {cargando && <p>Cargando ideas...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {ideas.map((idea) => (
                    <div key={idea.id} className='border p-2 rounded-lg shadow-lg'>
                        <img src={idea.foto} alt='Idea' className='w-full h-40 object-cover rounded' />
                        <div className='flex justify-between mt-2'>
                            <button onClick={() => handleEdit(idea)} className='bg-blue-500 text-white px-2 py-1 rounded'>
                                Editar
                            </button>
                            <button onClick={() => handleDelete(idea.id)} className='bg-red-500 text-white px-2 py-1 rounded'>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <ModalIdea isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <IdeaForm 
                        initialIdea={selectedIdea}
                        onSave={handleSave}
                        onCancel={() => setModalOpen(false)} 
                    />
                    <button onClick={() => setModalOpen(false)} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg">
                        Cerrar
                    </button>
                </ModalIdea>
            )}
        </main>
    );
};

export default GestionIdeasPage;
