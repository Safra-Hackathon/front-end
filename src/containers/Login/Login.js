import React from 'react';

import Flex from 'components/Flex';
import BGSafra from 'assets/images/safra_bank_large.jpg';

import { LoginRoutes } from '../../routes';
import { FlexImageBG } from '../../components/Flex/Flex';

const Login = () => (
  <Flex justifyCenter alignCenter fullHeight>
    <FlexImageBG backgroundImage={BGSafra} />
    <LoginRoutes />
  </Flex>
);

export default Login;
