// @material-ui/icons
import * as pathNames from './pathNames';
import { DashboardPage } from '../pages/DashboardPage';

const routes = [
  {
    path: pathNames.DASHBOARD,
    component: DashboardPage,
    exact: true,
  },
];

export default routes;
