import axios from 'axios';

export const uploadVideo = async (file) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('video', file);

  const response = await axios.post('/upload', formData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
