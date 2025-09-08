import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.stability.ai/v2beta',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default axiosInstance;
