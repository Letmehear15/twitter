import axios from 'axios'
import { Tweet } from '../redux/ducks/tweet/contracts/state'


export const fullTweetApi = {
    fetchFullTweet (id: string):Promise<Tweet[]> {
        return axios.get(`http://localhost:3001/tweets?_id=${id}`).then(({data}) => data)
    }
}