// @material-ui/icons
import * as pathNames from './pathNames';
import { DashboardPage } from '../pages/DashboardPage';
import SafraPaybackPage from '../pages/SafraPaybackPage';

const routes = [
  {
    path: pathNames.DASHBOARD,
    component: DashboardPage,
    exact: true,
  },
  {
    path: pathNames.PAYBACK,
    component: SafraPaybackPage,
    exact: true,
  },
];

export default routes;
