import { combineReducers, createStore } from 'redux';
import { cacheReducer } from './cache';
import { sidebarReducer } from './sidebar';
import { apiTokenReducer } from './api';

const rootReducer = combineReducers(
  { cache: cacheReducer, sidebar: sidebarReducer, api: apiTokenReducer },
);

export default createStore(rootReducer);
