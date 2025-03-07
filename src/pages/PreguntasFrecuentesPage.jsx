import React, { useState, useEffect } from "react";
import usePreguntas from "../hooks/usePreguntas";

const PreguntasFrecuentesPage = () => {
  const { preguntas, fetchPreguntas, removePregunta } = usePreguntas();
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  useEffect(() => {
    fetchPreguntas();
  }, []);

  const togglePregunta = (index) => {
    setPreguntaAbierta(preguntaAbierta === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {preguntas.map((pregunta, index) => (
          <div key={pregunta.id} className="border rounded-lg">
            <button
              className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
              onClick={() => togglePregunta(index)}
            >
              {pregunta.pregunta}
            </button>
            {preguntaAbierta === index && (
              <div className="p-4 border-t bg-white">
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentesPage;