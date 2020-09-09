import { combineReducers, createStore } from 'redux';
import { cacheReducer } from './cache';
import { sidebarReducer } from './sidebar';

const rootReducer = combineReducers({ cache: cacheReducer, sidebar: sidebarReducer });

export default createStore(rootReducer);
