import axios from '../lib/axios';

export default class GeneralService {
  static getCSRFToken() {
    return axios.get('/sanctum/csrf-cookie');
  }
}
