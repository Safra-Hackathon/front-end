import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { WRITE_CACHE } from './cacheStore';

const selector = (type, id) => (state) => {
  if (id) {
    return state[type] ? state[type].find((a) => a._id === id) : state[type + id];
  }
  return state[type];
};

/**
 * Hook para acessar a redux-store
 */

const useCache = () => {
  const dispatch = useDispatch();

  // const cache = useSelector(selector(type, id), shallowEqual);

  const useReadCache = (type, id) => useSelector(selector(type, id), shallowEqual);

  const writeCache = (entity, data) => {
    dispatch({
      type: WRITE_CACHE,
      payload: {
        entity,
        data,
      },
    });
    return data;
  };

  return {
    writeCache,
    readCache: useReadCache,
  };
};

export default useCache;
