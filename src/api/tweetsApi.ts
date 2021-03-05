import axios from 'axios'
import { Tweet } from '../redux/ducks/tweet/contracts/state'

export const tweetApi = {
    getTweets():Promise<Tweet> {
        return axios.get('http://localhost:3001/tweets').then(({ data }) => data)
    },
    addTweet(tweet:Tweet) {
        return axios.post('http://localhost:3001/tweets', tweet)
    }
}