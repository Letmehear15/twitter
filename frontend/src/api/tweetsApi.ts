import { AxiosResponse } from 'axios';
import { axios } from '../core/axios';
import { Tweet } from '../redux/ducks/tweet/contracts/state';

export const tweetApi = {
  async getTweets(): Promise<Tweet> {
    const { data } = await axios.get<AxiosResponse<Tweet>>(`/tweets`);
    return data.data;
  },
  async addTweet(text: string): Promise<Tweet> {
    const { data } = await axios.post<AxiosResponse<Tweet>>(`/tweets`, {
      text,
    });
    return data.data;
  },
};
