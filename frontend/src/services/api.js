import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Automatically inject JWT token into every outgoing request
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (!token) {
      const rawUser = localStorage.getItem("user") || localStorage.getItem("userInfo");
      if (rawUser) {
        try {
          token = JSON.parse(rawUser)?.token;
        } catch (_) {}
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Automatically handle token expiry or unauthorized responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userInfo");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;