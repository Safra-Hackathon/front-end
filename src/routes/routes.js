// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import * as pathNames from './pathNames';

const routes = [
  {
    path: pathNames.APP,
    component: Dashboard,
    exact: true,
  },
];

export default routes;
