import { useAxios } from '../hooks';
import { GET, POST } from './util';

const URL = '/payback';
export const PAYBACK_TYPE = 'Payback';

export const useGetPayback = () => useAxios({ url: URL, entity: PAYBACK_TYPE, method: GET });

export const usePostPayback = () => useAxios({
  url: URL, entity: PAYBACK_TYPE, method: POST, manual: true,
});

export const useGetPaybackHistory = () => useAxios({ url: `${URL}/history`, entity: PAYBACK_TYPE, method: GET });
