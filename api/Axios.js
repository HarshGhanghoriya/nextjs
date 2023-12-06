import { BASE_URL } from "@/constastants/Constant";
import axios from "axios";
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response?.status === 400 ||
      error.response?.status === 403 ||
      error.response?.status === 401
    ) {
      localStorage.removeItem("token");
      window.location = "/";
    } else return Promise.reject(error);
  }
);
export default api;
