import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import navigator from 'routes/navigator';

import Flex from 'components/Flex';

import {
  Content, Menu, MenuItem, MenuIcon,
} from './styles';

import useSidebarStore from '../../store/sidebar';

/**
 * Função responsável por renderizar Links do Sidebar
 * @param {string} location Path atual da navegação
 */
const RoutesLink = ({ location }) => {
  const { sidebarToggle } = useSidebarStore();

  return navigator.map((route) => (
    <Link to={route.path} key={route.path} onClick={() => sidebarToggle(false)}>
      <MenuItem active={location === route.path}>
        <MenuIcon>
          <route.icon />
        </MenuIcon>
        {route.name}
      </MenuItem>
    </Link>
  ));
};

/**
 * Sidebar da aplicação
 */
const Sidebar = ({ location, ...props }) => (
  <Content {...props}>
    <Flex column fullWidth fullHeight justifyBetween>
      <Menu>
        <RoutesLink location={location.pathname} />
      </Menu>
    </Flex>
  </Content>
);

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Sidebar);
