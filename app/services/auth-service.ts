import axios from '../lib/axios';
import LoginParams from '../models/params/login-params';
import RegisterParams from '../models/params/register-params';
import GeneralService from './general-service';

export default class AuthService {
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
      return axios.post('/register', {
        name: registerParams.name,
        email: registerParams.email,
        password: registerParams.password,
        password_confirmation: registerParams.password_confirmation,
      });
    }
  );

  static logout() {
    return axios.post('/logout');
  }
}
