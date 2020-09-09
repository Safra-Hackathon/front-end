import React, { useState } from 'react';

import { Dehaze, Notifications, NotificationsOutlined } from '@material-ui/icons';
import { SwipeableDrawer, Badge } from '@material-ui/core';

import Sidebar from 'containers/Sidebar';

import SafraLogo from 'assets/images/bancoSafraLogo.png';
import LogoImage from 'assets/images/bancoSafraIcon.png';

import { makeStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';

import {
  Container, HeaderContent, Wrap, Logo, ProfileContainer, LogoMobile,
} from './styles';
import ProfilePic from './ProfilePic';
import useSidebarStore from '../../store/sidebar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    flexShrink: 0,
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popover, setPopover] = useState(null);
  const { data: userEmail } = { data: {} }; // useAxios();
  const { data: dataNotification, loading } = { data: { totalNewNotifications: 0 } };
  const { mobileSideBarOpen, sidebarToggle } = useSidebarStore();
  const { appBar, drawer } = useStyles();

  return (
    <Container position="fixed" className={appBar}>
      <SwipeableDrawer
        className={drawer}
        open={mobileSideBarOpen}
        onClose={() => sidebarToggle(false)}
        onOpen={() => sidebarToggle(true)}
      >
        <Sidebar />
      </SwipeableDrawer>
      <HeaderContent>
        <Wrap>
          <Dehaze onClick={() => sidebarToggle(true)} className="expand" />
          <LogoMobile src={LogoImage} alt="Safra Mobile" className="d-none-md" />
          <Logo src={SafraLogo} alt="Safra Payback" className="d-none-mobile" />
        </Wrap>
        <Wrap>
          {!loading && dataNotification && (
            <Badge
              badgeContent={dataNotification.totalNewNotifications.total}
              color="primary"
              className="mr-2"
            >
              {dataNotification.totalNewNotifications.total === 0 ? (
                <NotificationsOutlined
                  onClick={(e) => {
                    setPopover(e.currentTarget);
                  }}
                />
              ) : (
                <Notifications
                  onClick={(e) => {
                    setPopover(e.currentTarget);
                  }}
                />
              )}
            </Badge>
          )}
          <ProfileContainer>
            <NotificationMenu
              popover={popover}
              setPopover={setPopover}
              dataNotification={dataNotification}
            />
            <ProfilePic setAnchorEl={setAnchorEl} />
            <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          </ProfileContainer>

        </Wrap>
      </HeaderContent>
    </Container>
  );
};

export default Header;
