import React, { useState } from 'react';

import { Notifications, NotificationsOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import SafraLogo from 'assets/images/bancoSafraLogo.png';
import LogoImage from 'assets/images/bancoSafraIcon.png';

import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';

import {
  Container, HeaderContent, Wrap, Logo, ProfileContainer, LogoMobile,
} from './styles';
import ProfilePic from './ProfilePic';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popover, setPopover] = useState(null);
  const { data: dataNotification, loading } = { data: { totalNewNotifications: 0 } };

  return (
    <Container position="fixed">
      <HeaderContent>
        <Wrap>
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
