import React from 'react';

const PrivacidadPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-8">Política de Privacidad</h1>
        <p className="text-gray-600 mb-4">Última actualización: <strong>07/03/2025</strong></p>

        <p className="mb-6">
          En <strong>Tu Tienda de Pinturas</strong> nos comprometemos a proteger tu privacidad. Esta política de privacidad
          explica cómo recopilamos, utilizamos y protegemos tu información personal cuando usas nuestro sitio web
          <strong> https://el-huequito.netlify.app</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Información que Recogemos</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Datos de identificación:</strong> Nombre, dirección de correo electrónico, número de teléfono.</li>
          <li><strong>Datos de compra:</strong> Información sobre productos comprados, dirección de envío y facturación, método de pago.</li>
          <li><strong>Datos de navegación:</strong> Información sobre tu dispositivo, dirección IP, tipo de navegador y actividad en el sitio web.</li>
          <li><strong>Cookies:</strong> Utilizamos cookies para mejorar tu experiencia en el sitio y recopilar estadísticas sobre la utilización del sitio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Uso de la Información</h2>
        <p className="text-gray-600 mb-4">La información que recopilamos se utiliza para los siguientes fines:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Procesar pedidos:</strong> Para completar y gestionar tu compra, incluyendo el envío y la facturación.</li>
          <li><strong>Atención al cliente:</strong> Para responder a tus preguntas y resolver cualquier problema relacionado con tu pedido o experiencia en el sitio.</li>
          <li><strong>Mejorar el servicio:</strong> Para analizar el comportamiento de navegación y mejorar la experiencia del usuario en el sitio.</li>
          <li><strong>Marketing:</strong> Con tu consentimiento, podemos enviarte correos electrónicos sobre novedades, promociones y productos que podrían interesarte.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Protección de la Información</h2>
        <p className="text-gray-600 mb-4">
          Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Sin embargo, ninguna transmisión de datos a través de Internet es completamente segura.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Uso de Cookies</h2>
        <p className="text-gray-600 mb-4">
          Las cookies son pequeños archivos que se almacenan en tu dispositivo y que permiten mejorar la funcionalidad del sitio web. Puedes configurar tu navegador para rechazar las cookies, pero esto podría afectar tu experiencia de usuario en el sitio.
        </p>
        <p className="text-gray-600 mb-4">
          Para más detalles sobre cómo usamos las cookies, consulta nuestra{' '}
          <a href="/politica-de-cookies" className="text-orange-600 hover:text-orange-800">Política de Cookies</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Compartir Información con Terceros</h2>
        <p className="text-gray-600 mb-4">
          No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Proveedores de servicios:</strong> Podemos compartir tu información con proveedores que nos ayuden a operar nuestro sitio web, procesar pagos y gestionar el envío.</li>
          <li><strong>Cumplimiento legal:</strong> Podemos divulgar tu información si así lo exige la ley o en respuesta a solicitudes de autoridades gubernamentales.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Tus Derechos</h2>
        <p className="text-gray-600 mb-4">Tienes los siguientes derechos sobre tus datos personales:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Acceso:</strong> Puedes solicitar acceso a los datos personales que tenemos sobre ti.</li>
          <li><strong>Corrección:</strong> Puedes corregir cualquier información personal incorrecta o desactualizada.</li>
          <li><strong>Eliminación:</strong> Puedes solicitarnos que eliminemos tus datos personales, salvo que exista una obligación legal para mantenerlos.</li>
          <li><strong>Oposición:</strong> Puedes oponerte a que utilicemos tus datos para fines de marketing directo.</li>
          <li><strong>Portabilidad:</strong> Puedes solicitar que transferimos tus datos a otro proveedor de servicios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Cambios en la Política de Privacidad</h2>
        <p className="text-gray-600 mb-4">
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página y la fecha de la última actualización será indicada al inicio del documento. Te recomendamos que revises periódicamente esta política para estar informado sobre cómo protegemos tu información.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contacto</h2>
        <p className="text-gray-600 mb-4">
          Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, por favor contáctanos a:
        </p>
        <ul className="text-gray-600">
          <li><strong>Correo electrónico:</strong> <a href="mailto:elhuequito@gmail.com" className="text-orange-600 hover:text-orange-800">elhuequito@gmail.com</a></li>
          <li><strong>Dirección:</strong> Jirón Arica N° 851 / </li>
          <li><strong>Teléfono:</strong> (065) 234258</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacidadPage;