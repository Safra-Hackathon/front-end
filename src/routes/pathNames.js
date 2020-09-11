export const LOGIN = '/login';
export const APP = '/';
export const NOTFOUND = '/404';

const PREFIX = APP === '/' ? '' : APP;

export const DASHBOARD = `${PREFIX}/`;

export const MENU = `${PREFIX}/menu`;

export const TRANSACTIONS = `${PREFIX}/transactions`;

export const INSTITUTIONS = `${PREFIX}/institutions`;

export const POINTS = `${PREFIX}/points`;

export const CHALLENGES = `${PREFIX}/challenges`;

export const PAYBACK = `${PREFIX}/payback`;
