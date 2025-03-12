// pages/PromocionPage.jsx

import React, { useEffect, useState } from "react";
import usePromociones from "../hooks/usePromociones";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const PromocionPage = () => {
  const { promociones, cargando, error, fetchPromociones } = usePromociones();
  const [alertShown, setAlertShown] = useState(false); // Para evitar múltiples alertas

  useEffect(() => {
    if (error && !alertShown) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
      });
      setAlertShown(true);
    }
  }, [error, alertShown]);

  useEffect(() => {
    if (!cargando && promociones.length === 0 && !error) {
      fetchPromociones();
    }
  }, [promociones.length, cargando, error, fetchPromociones]);

  if (cargando) {
    return <p>Cargando promociones...</p>;
  }

  if (promociones.length === 0) {
    return <p>No hay promociones disponibles.</p>;
  }

  return (
    <>
      <Helmet>
        <title>Promociones - El Huequito | Ofertas en Pintura y Decoración</title>
        <meta
          name="description"
          content="Aprovecha las mejores promociones en pintura y decoración de El Huequito. Ofertas exclusivas y precios bajos para renovar tus espacios con calidad."
        />
        <meta
          name="keywords"
          content="promociones, ofertas, descuentos, pintura, decoración, hogar, creatividad, precios bajos, El Huequito"
        />
        <meta name="author" content="El Huequito" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Promociones - El Huequito | Ofertas en Pintura y Decoración" />
        <meta property="og:description" content="Descubre las promociones exclusivas en pintura y decoración. Calidad garantizada a los mejores precios." />
        <meta property="og:image" content="https://i.postimg.cc/C52VzrDY/imagen.png" />
        <meta property="og:url" content="https://el-huequito.netlify.app/promociones" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Promociones - El Huequito | Ofertas en Pintura y Decoración" />
        <meta name="twitter:description" content="Aprovecha nuestras ofertas en pintura y decoración. Encuentra calidad y precios bajos en El Huequito." />
        <meta name="twitter:image" content="https://i.postimg.cc/C52VzrDY/imagen.png" />
        <meta name="twitter:url" content="https://el-huequito.netlify.app/promociones" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Promociones - El Huequito",
              "url": "https://el-huequito.netlify.app/promociones",
              "description": "Aprovecha las mejores promociones en pintura y decoración de El Huequito. Ofertas exclusivas y precios bajos para renovar tus espacios con calidad.",
              "mainEntityOfPage": "https://el-huequito.netlify.app/promociones",
              "publisher": {
                "@type": "Organization",
                "name": "El Huequito",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://i.postimg.cc/WbdkCRfp/logo-huequito-fecha.png"
                }
              },
              "promotions": ${JSON.stringify(promociones.map((promocion) => ({
                "@type": "Offer",
                "name": promocion.titulo,
                "description": promocion.descripcion,
                "url": `https://el-huequito.netlify.app/promociones/${promocion.id}`,
                "priceCurrency": "S/",
                "price": promocion.precio,  // Asegúrate de que el precio esté presente
                "priceValidUntil": promocion.fecha_termino,
                "eligibleRegion": "Global",
                "image": promocion.imagen_url || "/default-image.jpg"
              })))}
            }
          `}
        </script>

      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Promociones Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {promociones.map((promocion) => (
            <div key={promocion.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{promocion.titulo}</h2>
              <p>{promocion.descripcion}</p>
              <img
                src={promocion.imagen_url || placeholderImage}
                alt={promocion.titulo}
                className="w-full h-auto mt-2"
                onError={(e) => {
                    e.target.src = placeholderImage;
                }}
              />
              <p className="text-sm text-gray-500">
                Fecha de inicio: {new Date(promocion.fecha_inicio).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Fecha de fin: {new Date(promocion.fecha_termino).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Estado: {promocion.is_active ? "Activa" : "Inactiva"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromocionPage;