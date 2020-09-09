import React from 'react';

import Gate from 'containers/Gate';
import LoginForm from './LoginForm';
import { Avatar, AvatarIcon } from './styles';

const LoginPage = () => (
  <Gate>
    <Avatar new>
      <AvatarIcon />
    </Avatar>
    <h1 className="page-title ml-0 text-dark">Entrar</h1>
    <LoginForm />
  </Gate>
);

export default LoginPage;
