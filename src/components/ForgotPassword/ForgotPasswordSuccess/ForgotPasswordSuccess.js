import React from 'react';

import { Link as MuiLink } from '@material-ui/core';

export interface ForgotPasswordSuccessProps {
  email: string;
  tryAgain: () => void;
}

const ForgotPasswordSuccess: React.FC<ForgotPasswordSuccessProps> = ({ email, tryAgain }) => (
  <div>
    <h1 className="page-title ml-0 text-dark">E-mail enviado!</h1>
    <div>
      Enviamos um e-mail para
      {' '}
      <b>{email}</b>
      {' '}
e você poderá escolher uma nova senha.
    </div>
    <div className="mt-3">
      Não é seu endereço de e-mail?
      {' '}
      <MuiLink color="primary" onClick={tryAgain}>
        Tente novamente.
      </MuiLink>
    </div>
  </div>
);

export default ForgotPasswordSuccess;
