import { createStore } from 'redux';
import { handleWriteCache } from './cacheActions';

export const WRITE_CACHE = 'WRITE_CACHE';

const initialState = {};

const cacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_CACHE:
      return handleWriteCache(state, action.payload);
    default:
      return state;
  }
};

export const cacheStore = createStore(cacheReducer);
