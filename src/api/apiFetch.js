// src/api/apiFetch.js

//const backendURL = "https://api.backendhuequito.com";

const backendURL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : "https://api.backendhuequito.com";

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const url = `${backendURL}/api/${endpoint}`.replace(/(?<!:)\/+/g, "/"); // 🔥 FIX: Evita eliminar '//' en 'http://'
    console.log("Llamando a la API:", url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    console.log("Status Code:", response.status, response.statusText);
    console.log("Content-Type:", response.headers.get("Content-Type"));

    const text = await response.text();
    console.log("Respuesta cruda:", text.slice(0, 200)); // Muestra solo los primeros 200 caracteres

    let data = null;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        console.error("❌ Error al parsear JSON:", parseError.message);
        console.error("❌ Respuesta recibida:", text);
        throw new Error(`Error al parsear la respuesta JSON de ${endpoint}: ${parseError.message}`);
      }
    }

    if (!response.ok) {
      throw new Error(data?.message || `Error en la solicitud API a ${endpoint}: ${response.status} ${response.statusText}`);
    }

    return data; // Puede ser `null` en respuestas vacías como DELETE 204
  } catch (error) {
    console.error(`🚨 Error en la solicitud API a ${endpoint}:`, error.message);
    throw error;
  }
};