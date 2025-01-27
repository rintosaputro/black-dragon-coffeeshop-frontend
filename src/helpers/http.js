import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

const http = (token, useBaseUrl = true) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: useBaseUrl ? `${REACT_APP_API_URL}` : '',
    headers
  });
};

export default http;
