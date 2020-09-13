import { useAxios } from '../hooks';
import { GET, link, POST } from './util';

const URL = `${link}/payback`;
export const PAYBACK_TYPE = 'Payback';
export const PAYBACK_HISTORY_CHART = 'Grafico Historico Payback';

export const useGetPayback = () => useAxios({ url: URL, entity: PAYBACK_TYPE, method: GET });

export const usePostPayback = () => useAxios({
  url: URL, entity: PAYBACK_TYPE, method: POST, manual: true,
});

export const useGetPaybackHistory = () => useAxios({ url: `${URL}/history`, entity: PAYBACK_TYPE, method: GET });

export const useGetPaybackHistoryChart = (startDate, endDate) => useAxios({
  url: `${URL}/history/chart/${startDate}/${endDate}`,
  entity: PAYBACK_HISTORY_CHART,
  method: GET,
});

export const useGeneratePayback = (accountId) => useAxios({
  url: `${URL}/accounts/${accountId}/generate`, entity: PAYBACK_TYPE, method: POST, manual: true,
});
