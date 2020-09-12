// @material-ui/icons
import * as pathNames from './pathNames';
import SafraPaybackPage from '../pages/SafraPaybackPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import DashboardPage from '../pages/DashboardPage';
import FundsPage from '../pages/FundsPage';

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
  {
    path: pathNames.INSTITUTIONS,
    component: InstitutionsPage,
    exact: true,
  },
  {
    path: pathNames.FUNDS,
    component: FundsPage,
    exact: true,
  },
];

export default routes;
