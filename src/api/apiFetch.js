// src/api/apiFetch.js

//const backendURL = "https://api.backendhuequito.com";

const backendURL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : "https://api.backendhuequito.com";

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${backendURL}/api/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const text = await response.text();
    let data = null;

    if (text) {
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        throw new Error(`Error al parsear la respuesta JSON de ${endpoint}: ${parseError.message}`);
      }
    }

    if (!response.ok) {
      throw new Error(data?.message || `Error en la solicitud API a ${endpoint}: ${response.status} ${response.statusText}`);
    }

    return data; // Puede ser `null` en respuestas vacías como DELETE 204
  } catch (error) {
    console.error(`Error en la solicitud API a ${endpoint}:`, error.message);
    throw error;
  }
};