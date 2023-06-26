import axios from '../lib/axios';
import GeneralService from './general-service';

export default class AuthService {
  static getCurrentUser() {
    return axios.get('/api/user');
  }
  static withCSRF<T>(fn: Function) {
    return (args: T) => {
      GeneralService.getCSRFToken();
      return fn(args);
    };
  }
  static login = AuthService.withCSRF<LoginParams>(
    (loginParams: LoginParams) => {
      return axios.post('/login', {
        email: loginParams.email,
        password: loginParams.password,
        remember: true,
      });
    }
  );

  static register = AuthService.withCSRF<RegisterParams>(
    (registerParams: RegisterParams) => {
      return axios.post('/register', registerParams);
    }
  );

  static logout() {
    return axios.post('/logout');
  }
}
