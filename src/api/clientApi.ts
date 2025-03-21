import axios from 'axios';

const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

clientApi.interceptors.request.use((config) => {
  return config;
});

clientApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientApi;
