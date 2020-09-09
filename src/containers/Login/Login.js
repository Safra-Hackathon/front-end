import React from 'react';

import Flex from 'components/Flex';
import Logo from 'assets/images/safrapay_logo.png';
import BGSafra from 'assets/images/safra_bank_large.jpg';

import { LoginLogo } from './styles';
import { LoginRoutes } from '../../routes';
import { FlexImageBG } from '../../components/Flex/Flex';

const Login = () => (
  <Flex justifyCenter alignCenter fullHeight>
    <FlexImageBG backgroundImage={BGSafra} />
    <LoginLogo src={Logo} alt="Safra" />
    <LoginRoutes />
  </Flex>
);

export default Login;
