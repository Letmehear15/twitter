import axios from 'axios';

export const trendsAPI = {
  fetchTrends() {
    return axios.get('/trends').then(({ data }) => data);
  },
};
