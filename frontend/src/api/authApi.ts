import { axios } from '../core/axios';
import { formData } from '../pages/signIn/signModalComponents/LoginModal';
import { UserRegisterData } from '../redux/ducks/user/contracts/state';
import { User } from '../redux/types';

export const authApi = {
  async signIn(formData: formData): Promise<User> {
    const data = await axios.post<User>(
      '/auth/login',
      {
        username: formData.login,
        password: formData.password
      }
    );
    return data.data;
  },
  async getMe(): Promise<User> {
    const {data} = await axios.get('/auth/me')
    return data.data
  },
  async register(formData: UserRegisterData) {
    const data = await axios.post('/auth/register', {... formData})
    return data.data
  }
};
