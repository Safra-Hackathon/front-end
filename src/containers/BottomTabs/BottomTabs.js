import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import navigator from 'routes/navigator';
import { BottomNavigationAction } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';

const BottomTabs = ({ location, history }) => (
  <Container elevation={6}>
    <BottomNavigation
      style={{ height: '60px' }}
      value={location.pathname}
      onChange={((event, value) => {
        history.push(value);
      })}
      showLabels
    >
      {navigator.map((route) => (
        <BottomNavigationAction
          style={{ minWidth: '0' }}
          label={route.name}
          icon={<route.icon />}
          key={route.path}
          value={route.path}
        />
      ))}
    </BottomNavigation>
  </Container>
);

export default withRouter(BottomTabs);
