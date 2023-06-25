import axios from '../lib/axios';

const BASE_PATH = '/api/users';
export default class UserService {
  static getUserPreferences() {
    return axios.get(`${BASE_PATH}/preferences`);
  }
  static updatePreferences(preferences: UserPreferences) {
    return axios.put(`${BASE_PATH}/preferences`, preferences);
  }
}
