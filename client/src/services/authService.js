import axios from 'axios';

export const signup = async (formData) => {
  const response = await axios.post('/signup', formData);
  return response.data;
};

export const login = async (formData) => {
  const response = await axios.post('/login', formData);
  const token = response.data.token;
  localStorage.setItem('token', token);
  return token;
};
