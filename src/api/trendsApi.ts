import axios from 'axios'

export const trendsAPI = {
    fetchTrends() {
        return axios.get('http://localhost:3001/trends').then(({data}) => data)
    }
}