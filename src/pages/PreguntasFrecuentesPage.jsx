import React, { useState, useEffect } from "react";
import usePreguntas from "../hooks/usePreguntas";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Preguntas Frecuentes - El Huequito</title>
        <meta name="description" content="Consulta las preguntas frecuentes sobre nuestros productos y servicios. Encuentra respuestas rápidas para tus dudas." />
        <meta name="keywords" content="preguntas frecuentes, dudas, respuestas, productos, servicio al cliente" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="El Huequito | Pinturas en Iquitos" />
        <meta property="og:description" content="Conoce la historia y calidad de El Huequito, expertos en pinturas y decoración." />
        <meta property="og:image" content="https://i.postimg.cc/C52VzrDY/imagen.png" />
        <meta property="og:url" content="https://www.elhuequito.com/nosotros" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:title" content="El Huequito | Pinturas en Iquitos" />
        <meta name="twitter:description" content="Conoce la historia y calidad de El Huequito, expertos en pinturas y decoración." />
        <meta name="twitter:image" content="https://i.postimg.cc/C52VzrDY/imagen.png" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
          {
              "@context": "http://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cómo puedo realizar una compra?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Puedes comprar nuestros productos directamente en la tienda o a través de nuestra página web."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Hacen envíos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, realizamos envíos a nivel nacional. Consulta las condiciones en nuestra web."
                  }
                }
              ]
          }
          `}
        </script>
      </Helmet>
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