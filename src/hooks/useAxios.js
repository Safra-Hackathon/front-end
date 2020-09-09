import { useEffect } from 'react';
import { makeUseAxios } from 'axios-hooks';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import useNotistack from './useNotistack';
import { LOGIN } from '../routes/pathNames';
import useCache from '../store/useCache';

const useAxiosHook = makeUseAxios({
  axios: axios.create({
    baseURL: '/',
    // headers: { 'Cache-Control': 'no-cache' },
    // adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    //   enabledByDefault: false,
    // }),
  }),
});

/**
 * Hook para fazer requests com axios
 */

const useAxios = (
  url,
  method,
  entity,
  manual,
  config = {},
  notification = true,
) => {
  const { successSnack, errorSnack } = useNotistack();
  const history = useHistory();

  const { writeCache, readCache } = useCache();
  const cachedData = readCache(entity);

  const { token, isLoggedIn, logOut } = useJwtAuth();
  const [{
    response, error, data, loading,
  }, execute] = useAxiosHook(
    {
      headers: { Authorization: `Bearer ${token}` },
      url,
      method,
      validateStatus(status) {
        return status >= 200 && status < 500;
      },
      ...config,
    },
    {
      manual,
      useCache: false,
    },
  );

  useEffect(() => {
    if (!response || !response.config) return;
    function handleNotifications() {
      if (notification) {
        console.log(response);
        switch (response.status) {
          case 200:
            if (response.config.method === 'put') {
              successSnack(`${entity} Atualizado(a) com Sucesso!`);
            } else if (response.config.method === 'delete') {
              successSnack(`${entity} Excluido(a) com Sucesso!`);
            }
            break;
          case 201:
            successSnack(`${entity} Registrado(a) com Sucesso!`);
            break;
          case 400:
            errorSnack('Falha na Conexão');
            break;
          case 401:
            if (isLoggedIn) {
              logOut();
              errorSnack('Sua sessão expirou!');
              history.push(LOGIN);
            } else {
              errorSnack('Erro de Autenticação');
            }
            break;
          case 403:
            errorSnack('Acesso Negado!');
            break;
          case 404:
            errorSnack(`${entity} não encontrado(a)!`);
            break;
          default:
            break;
        }
      }
    }

    function handleCache() {
      // If cached data doesn't exist yet on post/put/delete
      const cData = cachedData || [];

      switch (response.config.method) {
        case 'get':
          writeCache(entity, data);
          break;
        case 'post':
          writeCache(entity, [...cData, data]);
          break;
        case 'put':
          writeCache(entity, [...cData.filter((cd) => cd._id !== data._id), data]);
          break;
        case 'delete':
          writeCache(entity, [...cData.filter((cd) => cd._id !== data._id)]);
          break;
        default:
          console.log('Not Implemented');
      }
    }

    handleCache();
    handleNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);

  return [{
    response, error, data: cachedData, loading,
  }, execute];
};

export default useAxios;
