import axios from '../lib/axios';

export default class UserService {
  static getCurrentUser() {
    return axios.get('/api/user');
  }
}
