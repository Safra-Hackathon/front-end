import { useAxios } from '../hooks';
import { GET, link, POST } from './util';

const URL = `${link}/investments`;
export const INVESTMENT_TYPE = 'Investimento';

export const useGetInvestment = () => useAxios({ url: URL, entity: INVESTMENT_TYPE, method: GET });

export const usePostInvestment = () => useAxios({
  url: URL, entity: INVESTMENT_TYPE, method: POST, manual: true,
});
