import axios, { AxiosResponse } from 'axios';
import { Tweet } from '../redux/ducks/tweet/contracts/state';

export const fullTweetApi = {
  fetchFullTweet(id: string): Promise<Tweet> {
    return axios
      .get<AxiosResponse<Tweet>>(`/tweets/${id}`)
      .then(({ data }) => data.data);
  },
};
