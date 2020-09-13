import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// Actions

export const handleToken = (state, payload) => ({
  ...state,
  token: payload.token,
});

export const handleAccountId = (state, payload) => {
  localStorage.setItem('accountId', payload.accId);
  return ({
    ...state,
    accountId: payload.accId,
  });
};

// Store

export const HANDLE_TOKEN = 'HANDLE_TOKEN';
export const HANDLE_ACCOUNT_ID = 'HANDLE_ACCOUNT_ID';

const initialState = { token: null, accountId: localStorage.getItem('accountId') };

export const apiTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TOKEN:
      return handleToken(state, action.payload);
    case HANDLE_ACCOUNT_ID:
      return handleAccountId(state, action.payload);
    default:
      return state;
  }
};

/**
 * Hook para acessar o token da api
 */

const useApiToken = () => {
  const dispatch = useDispatch();

  const apiToken = useSelector((state) => state.api.token, shallowEqual);

  const accountId = useSelector((state) => state.api.accountId, shallowEqual);

  const setToken = (token) => {
    dispatch({
      type: HANDLE_TOKEN,
      payload: {
        token,
      },
    });
  };

  const setAccountId = (accId) => {
    dispatch({
      type: HANDLE_ACCOUNT_ID,
      payload: {
        accId,
      },
    });
  };

  return {
    accountId,
    apiToken,
    setToken,
    setAccountId,
  };
};

export default useApiToken;
