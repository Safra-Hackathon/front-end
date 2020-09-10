import Home from '@material-ui/icons/Home';
import Public from '@material-ui/icons/Public';
import Poll from '@material-ui/icons/Poll';
import Settings from '@material-ui/icons/Settings';

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
    name: 'SafraPay Points',
    path: pathNames.POINTS,
    icon: Poll,
  },
  {
    name: 'Desafios',
    path: pathNames.CHALLENGES,
    icon: Settings,
  },
  {
    name: 'Safra Payback',
    path: pathNames.PAYBACK,
    icon: Settings,
  },
];

export default navigator;
