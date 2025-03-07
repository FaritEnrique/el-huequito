import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMensajes } from '../hooks/useMensajes';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import MensajeList from '../components/MensajeList';

const GestionMensajes = () => {
  const { fetchMensajes, removeMensaje } = useMensajes();
  const [mensajes, setMensajes] = useState([]);
  const [respuesta, setRespuesta] = useState({});

  useEffect(() => {
    fetchMensajes()
      .then(data => {
        if (Array.isArray(data)) {
          setMensajes(data);
        } else {
          throw new Error("Datos no válidos");
        }
      })
      .catch(err => {
        console.error("Error al obtener los mensajes:", err);
        toast.error("Hubo un problema al cargar los mensajes.");
      });
  }, []);

  const handleRespuestaChange = (docId, value) => {
    setRespuesta(prev => ({ ...prev, [docId]: value }));
  };

  const handleEnviarEmail = (correo, docId) => {
    if (!respuesta[docId]) {
      toast.warning('Por favor escribe una respuesta antes de enviar el email.');
      return;
    }
    const subject = encodeURIComponent("Respuesta a tu mensaje");
    const body = encodeURIComponent(respuesta[docId]);
    window.location.href = `mailto:${correo}?subject=${subject}&body=${body}`;
  };

  const handleEnviarWhatsApp = (celular, docId) => {
    if (!respuesta[docId]) {
      toast.warning('Escribe una respuesta antes de enviar el mensaje de WhatsApp.');
      return;
    }
    const mensajeWhatsApp = encodeURIComponent(respuesta[docId]);
    window.open(`https://wa.me/${celular}?text=${mensajeWhatsApp}`, "_blank");
  };

  const handleDeleteMensaje = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás Seguro?",
        text: "¡No lo podrás revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar",
      });
  
      if (result.isConfirmed) {
        await removeMensaje(id);
        setMensajes((prevMensajes) => prevMensajes.filter((m) => m.id !== id));
        toast.success("El mensaje ha sido eliminado.");
      }
    } catch (error) {
      console.error("Error eliminando el mensaje:", error);
      toast.error("No se pudo eliminar el mensaje.");
    }
  };
  return (
    <main>
      <section className="max-w-[1300px] w-full mx-auto my-4 flex flex-wrap rounded-xl border-2 border-black">
        <div className="max-w-[1200px] w-full bg-black rounded-xl flex flex-col p-4 mx-auto my-4 md:flex-row items-center">
          <div className='w-full bg-slate-300'>
            <div className='w-full flex justify-end p-2'>
              <Link to='/admin'>
                <button className='font-bold text-white bg-blue-500 border-2 border-black rounded-xl p-2'>
                  Ir Gestión
                </button>
              </Link>
            </div>
            <MensajeList
              mensajes={mensajes}
              respuesta={respuesta}
              handleRespuestaChange={handleRespuestaChange}
              handleEnviarEmail={handleEnviarEmail}
              handleEnviarWhatsApp={handleEnviarWhatsApp}
              handleDeleteMensaje={handleDeleteMensaje}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GestionMensajes;