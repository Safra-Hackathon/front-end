import {
  Home, Public, VideogameAssetSharp, StarOutlined, MonetizationOnOutlined,
} from '@material-ui/icons';

import * as pathNames from './pathNames';

/**
 * Array de navegação para o menu
 */
const navigator = [
  {
    name: 'Início',
    path: pathNames.DASHBOARD,
    icon: Home,
  },
  {
    name: 'Pagamentos',
    path: pathNames.TRANSACTIONS,
    icon: Public,
  },
  {
    name: 'Safra Payback',
    path: pathNames.PAYBACK,
    icon: MonetizationOnOutlined,
  },
  // {
  //   name: 'Instituições',
  //   path: pathNames.INSTITUTIONS,
  //   icon: Domain,
  // },
  {
    name: 'SafraPay Points',
    path: pathNames.POINTS,
    icon: VideogameAssetSharp,
  },
  {
    name: 'Conquistas',
    path: pathNames.CHALLENGES,
    icon: StarOutlined,
  },
];

export default navigator;
