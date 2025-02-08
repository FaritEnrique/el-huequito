const backendURL = "https://api.backendhuequito.com";

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
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Error al parsear la respuesta JSON de ${endpoint}`);
    }

    if (!response.ok) {
      throw new Error(data.message || `Error en la solicitud API a ${endpoint}`);
    }

    return data;
  } catch (error) {
    console.error(`Error en la solicitud API a ${endpoint}:`, error.message);
    throw error;
  }
};