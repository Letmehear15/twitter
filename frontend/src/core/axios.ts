import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('twToken');
  return config;
});

axios.defaults.baseURL = 'http://localhost:8888';

export { axios };
