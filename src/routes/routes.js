// @material-ui/icons
import * as pathNames from './pathNames';
import { Flex } from '../components/Flex/Flex';

const routes = [
  {
    path: pathNames.APP,
    component: Flex,
    exact: true,
  },
];

export default routes;
