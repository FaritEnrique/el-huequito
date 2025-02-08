const backendURL = "https://api.backendhuequito.com/api";

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${backendURL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error en la solicitud API a ${endpoint}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error en la solicitud API a ${endpoint}:`, error.message);
    throw error;
  }
};