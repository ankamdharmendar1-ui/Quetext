import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
  }
};

const stored = localStorage.getItem("token");
if (stored) setToken(stored);

export const register = (email, password) => api.post("/auth/register", { email, password });
export const login = (email, password) => api.post("/auth/login", { email, password });
export const scanText = (text, top_k_sources = 5) => api.post("/scan/text", { text, top_k_sources });

export default api;
