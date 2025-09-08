import axiosInstance from '../api/axiosInstance';

export const generateImage = (data: FormData) => {
  return axiosInstance.post('stable-image/generate/core', data);
};
