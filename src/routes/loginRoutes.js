import * as pathNames from './pathNames';
import LoginPage from '../views/Login/LoginPage';

export const loginRoutes = [
  {
    path: pathNames.APP,
    component: LoginPage,
    exact: true,
  },
];

export default loginRoutes;
