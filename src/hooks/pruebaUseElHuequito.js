import { 
    collection, 
    query, 
    getDocs, 
    addDoc, 
    doc, 
    updateDoc, 
    getDoc, 
    deleteDoc 
} from "firebase/firestore";
import { db } from "../services/firebase";

export const pruebaUseElHuequito = () => {
    // Referencias a las colecciones de Firestore
    const refMensaje = collection(db, 'mensajes-contacto');
    const refIdeas = collection(db, 'ideas');
    const refPreguntas = collection(db, 'preguntas');
    const refPromotions = collection(db, 'promociones');

    // Utilidad para procesar fechas y valores de comunicación
    const formatComunicacion = (comunicacion) => {
        const comunicacionMap = {
            0: 'Celular',
            1: 'Correo',
            2: 'Llamar',
        };
        return comunicacionMap[comunicacion] || 'Sin comunicación';
    };

    const formatFecha = (fecha) => {
        if (fecha && fecha.toDate) {
            return fecha.toDate().toLocaleString('es-ES'); // Convierte Timestamp a fecha legible
        }
        return fecha || 'Fecha no disponible';
    };

    // Métodos para la colección "mensajes-contacto"
    const fetchMensajesContacto = async () => {
        const qMensaje = query(refMensaje);
        const dataMensaje = await getDocs(qMensaje);
        const resultsMensaje = [];
        dataMensaje.forEach(doc => {
            const mensaje = doc.data();
            resultsMensaje.push({
                docId: doc.id,
                ...mensaje,
                fecha: formatFecha(mensaje.fecha),
                comunicacion: formatComunicacion(mensaje.comunicacion),
            });
        });
        return resultsMensaje;
    };

    const crearMensaje = async (mensaje) => {
        const newMensaje = {
            nombre: mensaje.nombre,
            celular: mensaje.celular,
            correo: mensaje.correo,
            comunicacion: mensaje.comunicacion,
            mensaje: mensaje.mensaje,
            fecha: new Date().toISOString(),
        };

        try {
            const responseMensaje = await addDoc(refMensaje, newMensaje);
            return { id: responseMensaje.id, newMensaje };
        } catch (error) {
            console.error("Error al guardar el mensaje: ", error);
            return null;
        }
    };

    const obtenerMensaje = async (id) => {
        const documentObtenerMensaje = doc(refMensaje, id);
        const mensaje = await getDoc(documentObtenerMensaje);
        return mensaje.data();
    };

    const removeMensaje = async (id) => {
        const documentMensaje = doc(refMensaje, id);
        await deleteDoc(documentMensaje);
        return { success: true, id };
    };

    // Métodos para la colección "ideas"
    const fetchIdeas = async () => {
        const qIdeas = query(refIdeas);
        const dataIdeas = await getDocs(qIdeas);
        const resultsIdeas = [];
        dataIdeas.forEach(doc => {
            resultsIdeas.push({
                docId: doc.id,
                ...doc.data(),
            });
        });
        return resultsIdeas;
    };

    // Métodos para la colección "preguntas"
    const fetchPreguntas = async () => {
        const qPreguntas = query(refPreguntas);
        const dataPreguntas = await getDocs(qPreguntas);
        const resultsPreguntas = [];
        dataPreguntas.forEach(doc => {
            resultsPreguntas.push({
                docId: doc.id,
                ...doc.data(),
            });
        });
        return resultsPreguntas;
    };

    const crearPregunta = async (pregunta) => {
        const newPregunta = {
            pregunta: pregunta.pregunta,
            respuesta: pregunta.respuesta,
        };

        try {
            const responsePregunta = await addDoc(refPreguntas, newPregunta);
            return { id: responsePregunta.id, newPregunta };
        } catch (error) {
            console.error("Error al guardar la pregunta: ", error);
            return null;
        }
    };

    const obtenerPregunta = async (id) => {
        const documentObtenerPregunta = doc(refPreguntas, id);
        const pregunta = await getDoc(documentObtenerPregunta);
        return pregunta.data();
    };

    const removePregunta = async (id) => {
        const documentPregunta = doc(refPreguntas, id);
        await deleteDoc(documentPregunta);
        return { success: true, id };
    };

    const editarPregunta = async (form, id) => {
        const documentEditarPregunta = doc(refPreguntas, id);
        await updateDoc(documentEditarPregunta, form);
        return { success: true, message: "Pregunta editada correctamente" };
    };

    // Métodos para la colección "promociones"
    const fetchPromotions = async () => {
        const qPromotions = query(refPromotions);
        const dataPromotions = await getDocs(qPromotions);
        const resultsPromotions = [];
        dataPromotions.forEach(doc => {
            resultsPromotions.push({
                docId: doc.id,
                ...doc.data(),
            });
        });
        return resultsPromotions;
    };

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
        removeMensaje,
        fetchIdeas,
        fetchPreguntas,
        crearPregunta,
        obtenerPregunta,
        removePregunta,
        editarPregunta,
        fetchPromotions,
        createPromotion,
        updatePromotion,
        deletePromotion,
    };
};

export default pruebaUseElHuequito;