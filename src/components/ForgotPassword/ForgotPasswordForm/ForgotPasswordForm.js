import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';

import PropTypes from 'prop-types';
import { Flex } from '../../Flex/Flex';
import ButtonProgress from '../../ButtonProgress';

const ForgotPasswordForm = ({
  setHasSendEmail,
  setEmailValue,
  email,
}) => {
  const [isSending, setIsSending] = useState(false);
  const forgotPassword = () => {};// useAxios

  const handleForgotPassword = async () => {
    if (email.length > 0) {
      try {
        setIsSending(true);
        await forgotPassword({
          variables: {
            email,
          },
        });
        setHasSendEmail(true);
      } catch (e) {
        setIsSending(false);
      }
    }
  };

  return (
    <div>
      <h1 className="page-title ml-0 text-dark">Esqueci minha Senha</h1>
      <span>Digite seu e-mail para recuperação de senha</span>
      <TextField
        label="E-mail"
        name="email"
        margin="normal"
        variant="outlined"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Flex fullWidth justifyBetween className="mt-4">
        <Link to="/">
          <Button color="primary">Voltar</Button>
        </Link>
        <ButtonProgress
          type="submit"
          color="primary"
          variant="contained"
          disabled={isSending}
          onClick={handleForgotPassword}
        >
          Enviar link de Recuperação
        </ButtonProgress>
      </Flex>
    </div>
  );
};

ForgotPasswordForm.propTypes = {
  setHasSendEmail: PropTypes.func.isRequired,
  setEmailValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ForgotPasswordForm;
