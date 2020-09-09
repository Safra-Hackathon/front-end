import React from 'react';

import Gate from 'containers/Gate';
import LoginForm from './LoginForm';
import { Avatar, AvatarIcon } from './styles';
import Logo from '../../assets/images/safrapay_logo.png';

const LoginPage = () => (
  <Gate>
    <Avatar new>
      <AvatarIcon src={Logo} alt="Safra" />
    </Avatar>
    <LoginForm />
  </Gate>
);

export default LoginPage;
