import { collection, query, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const useElHuequito = () => {
    
    const refMensaje = collection(db, 'mensajes-contacto')

    const fetchMensajesContacto = async () => {
        const qMensaje = query(refMensaje)
        const dataMensaje = await getDocs(qMensaje)
        const resultsMensaje = []
        dataMensaje.forEach(doc => {
            console.log(doc.id, doc.data())
            resultsMensaje.push({
                docId: doc.id,
                ...doc.data() // Representa el documento actual
            })
        })
        return resultsMensaje
    }

    const crearMensaje = async (mensaje) => {
        const newMensaje = {
            nombre: mensaje.nombre,
            celular: mensaje.celular,
            correo: mensaje.correo,
            comunicacion: mensaje.comunicacion,
            mensaje: mensaje.mensaje,
            fecha: new Date().toISOString(), // Genera automáticamente la fecha actual
        }

        try {

            const responseMensaje = await addDoc(refMensaje, newMensaje)

            return {
                id: responseMensaje.id,
                newMensaje
            }
        } catch (error) {
            console.error("Error al guardar el mensaje: ", error);

            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un error al guardar el mensaje. Por favor, intente nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });

            return null; // Manejo de error
        }
        
    }

    const obtenerMensaje = async (id) => {
        const documentObtenerMensaje = doc(refMensaje, id)

        const mensaje = await getDoc(documentObtenerMensaje)

        return mensaje.data()
    }

    const deleteMensaje = async (id) => {

        const documentMensaje = doc (refMensaje, id)

        await deleteDoc(documentMensaje)

        return {success: true, id}
    } 

    const refIdeas = collection(db, 'ideas')

    const fetchIdeas = async () => {
        const qIdeas = query(refIdeas)
        const dataIdeas = await getDocs(qIdeas)
        const resultsIdeas = []
        dataIdeas.forEach(doc => {
            console.log(doc.id, doc.data())
            resultsIdeas.push({
                docId: doc.id,
                ...doc.data()
            })
        })
        return resultsIdeas
    }

    const refPreguntas = collection(db, 'preguntas')

    const fetchPreguntas = async () => {
        const qPreguntas = query(refPreguntas)
        const dataPreguntas = await getDocs(qPreguntas)
        const resultsPreguntas = []
        dataPreguntas.forEach(doc => {
            console.log(doc.id, doc.data())
            resultsPreguntas.push({
                docId: doc.id,
                ...doc.data() // Representa el documento actual
            })
        })
        return resultsPreguntas
    }

    const crearPregunta = async (pregunta) => {
        const newPreguntas = {
            pregunta: pregunta.pregunta,
            respuesta: pregunta.respuesta,
        }

        try {

            const responsePregunta = await addDoc(refPreguntas, newPreguntas)

            return {
                id: responsePregunta.id,
                newPreguntas
            }
        } catch (error) {
            console.error("Error al guardar la Pregunta: ", error);

            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un error al guardar la pregunta. Por favor, intente nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });

            return null; // Manejo de error
        }
        
    }

    const obtenerPregunta = async (id) => {
        const documentObtenerPregunta = doc(refPreguntas, id)

        const pregunta = await getDoc(documentObtenerPregunta)

        return pregunta.data()
    }

    const removePregunta = async (id) => {
        const documentPregunta = doc (refPreguntas, id)

        await deleteDoc(documentPregunta)

        return { success: true, id }
    }

    const editarPregunta = async (form, id) => {

        const documentEditarPregunta = doc(refPreguntas, id)

        const preguntaModificada = await updateDoc(documentEditarPregunta, form)
        
        return {
            "success": true,
            "message": "Pregunta editada correctamente"
        }
    }

    const refPromotions = collection(db, "promociones");

    // Leer todas las promociones
    const fetchPromotions = async () => {
        const q = query(refPromotions);
        const data = await getDocs(q);
        const results = [];
        data.forEach((doc) => {
            results.push({
                docId: doc.id,
                ...doc.data(),
            });
        });
        return results;
    };

    // Crear una nueva promoción
    const createPromotion = async (promotion) => {
        const newPromotion = {
            title: promotion.title,
            description: promotion.description,
            startDate: promotion.startDate,
            endDate: promotion.endDate,
            isActive: promotion.isActive,
            image: promotion.image,
            createdBy: promotion.createdBy || "admin",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        try {
            const response = await addDoc(refPromotions, newPromotion);
            return { id: response.id, newPromotion };
        } catch (error) {
            console.error("Error al guardar la promoción: ", error);
            return null;
        }
    };

    // Actualizar una promoción
    const updatePromotion = async (id, updatedFields) => {
        try {
            const promotionRef = doc(refPromotions, id);
            updatedFields.updatedAt = new Date().toISOString();
            await updateDoc(promotionRef, updatedFields);
            return true;
        } catch (error) {
            console.error("Error al actualizar la promoción:", error);
            return false;
        }
    };

    // Eliminar una promoción
    const deletePromotion = async (id) => {
        try {
            const promotionRef = doc(refPromotions, id);
            await deleteDoc(promotionRef);
            return true;
        } catch (error) {
            console.error("Error al eliminar la promoción:", error);
            return false;
        }
    };

    return {
        fetchMensajesContacto,
        crearMensaje,
        obtenerMensaje,
        deleteMensaje,
        fetchIdeas,
        fetchPreguntas,
        crearPregunta,
        obtenerPregunta,
        removePregunta,
        editarPregunta,
        fetchPromotions,
        createPromotion,
        deletePromotion,
        updatePromotion
    }

}

export default useElHuequito