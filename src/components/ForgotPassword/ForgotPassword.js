import React, { useState } from 'react';

import Gate from 'containers/Gate';

import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordSuccess from './ForgotPasswordSuccess';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [hasSendEmail, setHasSendEmail] = useState(false);

  return (
    <Gate>
      {!hasSendEmail ? (
        <ForgotPasswordForm
          setHasSendEmail={setHasSendEmail}
          email={email}
          setEmailValue={setEmail}
        />
      ) : (
        <ForgotPasswordSuccess email={email} tryAgain={() => setHasSendEmail(false)} />
      )}
    </Gate>
  );
};

export default ForgotPassword;
