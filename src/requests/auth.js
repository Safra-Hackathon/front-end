import { useAxios } from '../hooks';

const URL = '/auth';
const ENTITY = 'Login';

export const useLogin = () => useAxios({
  url: `${URL}/login`, method: 'POST', entity: ENTITY, manual: true,
});
