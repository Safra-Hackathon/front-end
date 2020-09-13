import { useAxios } from '../hooks';
import { GET, link } from './util';

const URL = `${link}/funds`;
export const FUND_TYPE = 'Fundos';
export const FUND_RECOMMENDED_TYPE = 'Fundos Recomendados';

export const useGetFunds = () => useAxios({ url: URL, entity: FUND_TYPE, method: GET });

export const useGetRecommendedFunds = (currentBalance) => useAxios({
  url: `${URL}/recommend/${currentBalance}`,
  entity: FUND_RECOMMENDED_TYPE,
  method: GET,
});
