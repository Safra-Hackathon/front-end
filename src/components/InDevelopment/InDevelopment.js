import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Flex from 'components/Flex';

import SafraLogo from 'assets/images/bancoSafraLogo.png';
import { Emoji } from 'emoji-mart';
import { Logo, TextPage } from './styles';

const InDevelopment = withRouter(({ history }) => {
  const handleRedirect = () => {
    history.push('/');
  };
  return (
    <Flex
      fullHeight
      fullWidth
      justifyCenter
      alignCenter
      column
    >
      <Logo src={SafraLogo} alt="Safra Logo" className="d-none-md" />
      <Logo
        src={SafraLogo}
        alt="Safra Logo"
        className="d-none-mobile"
        width="500px"
      />
      <Emoji
        emoji=":construction_worker::skin-tone-2:"
        size={36}
        set="twitter"
      />
      <TextPage>Em desenvolvimento!</TextPage>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => handleRedirect()}
        className="mt-4"
      >
        Voltar para página inicial
      </Button>
    </Flex>
  );
});

export default InDevelopment;
