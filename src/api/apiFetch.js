const backendURL = "http://backend-huequito-env.eba-t2vzk34c.us-east-1.elasticbeanstalk.com/api/";

// Función genérica para realizar solicitudes a la API
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
      throw new Error(errorData.message || "Error en la solicitud API");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud API:", error.message);
    throw error;
  }
};