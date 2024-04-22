import axios from "axios";
import sessionManagement from "./session-management";

const localHost = true;

const apiUrl = () => {
  if (localHost) {
    return "http://localhost:8080";
  } else {
    return "http://localhost:8080";
  }
};

const api = axios.create({
  baseURL: apiUrl(),
});

api.interceptors.request.use(
  (config) => {
    const token = sessionManagement.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
