/* eslint-disable camelcase */
import { client } from 'axios-oauth-client';
import * as axios from 'axios';
import { useAxios } from '../hooks';
import { GET } from './util';
import useApiToken from '../store/api';

const AUTH = 'https://idcs-902a944ff6854c5fbe94750e48d66be5.identity.oraclecloud.com/oauth2/v1/token';

const link = 'https://af3tqle6wgdocsdirzlfrq7w5m.apigateway.sa-saopaulo-1.oci.customer-oci.com/fiap-sandbox';

const ACCOUNT_INFO = (accountId) => `${link}/open-banking/v1/accounts/${accountId}`;
export const SAFRA_INFO_TYPE = 'Safra Info';

export const useSafraAuth = () =>
// const { setToken } = useApiToken();
// const [{
//   data, loading, error, response,
// }, refetch] = useAxios({
//   url: AUTH,
//   method: POST,
//   entity: 'Login Safra',
//   manual: true,
//   auth: { username: process.env.SAFRA_CLIENT_ID, password: process.env.SAFRA_SECRET_ID },
//   config: { headers: { Authorization: 'Basic ZjlkM2NkOTYwMDg3NGFjMjgwM2QwM2NhNzA5Yjc4ZWI6MWEyMDc1ZTMtYjE1ZS00MzI0LTkwMmMtMGYxMmY4ZjA4MDgy' } },
//   data: { grant_type: 'client_credentials', scope: 'urn:opc:resource:consumer::all' },
// });

  client(axios.create(), {
    url: AUTH,
    grant_type: 'client_credentials',
    client_id: process.env.SAFRA_CLIENT_ID,
    client_secret: process.env.SAFRA_SECRET_ID,
    scope: 'urn:opc:resource:consumer::all',
  });
export const useGetAccountInfo = (accountId) => {
  const { token } = useApiToken();
  return useAxios({
    url: ACCOUNT_INFO(accountId),
    method: GET,
    entity: SAFRA_INFO_TYPE,
    config: { headers: { Authorization: `Bearer ${token}` } },
  });
};
