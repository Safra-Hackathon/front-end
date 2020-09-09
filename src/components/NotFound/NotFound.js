import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Flex from 'components/Flex';

import SafraLogo from 'assets/images/bancoSafraLogo.png';
import { Logo, TextPage } from './styles';

const NotFound = withRouter(({ history }) => {
  const handleRedirect = () => {
    history.push('/');
  };
  return (
    <Flex
      justifyCenter
      alignCenter
      style={{ height: '100%' }}
      column
      className="bg-primary"
    >
      <Logo src={SafraLogo} alt="GigaCandanga Logo" className="d-none-md" />
      <Logo
        src={SafraLogo}
        alt="GigaCandanga Logo"
        className="d-none-mobile"
        width="500px"
      />
      <TextPage>Página não encontrada</TextPage>
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

export default NotFound;
