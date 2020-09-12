import { useAxios } from '../hooks';
import { POST } from './util';

const URL = '/auth';
export const LOGIN_TYPE = 'Login';

export const useLogin = () => useAxios({
  url: `${URL}/login`, method: POST, entity: LOGIN_TYPE, manual: true,
});
