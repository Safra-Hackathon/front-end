import React from 'react';
import PropTypes from 'prop-types';

import { FlexColumn } from 'components/Flex';
import Card from 'components/Card';

/**
 * Componente responsável por renderizar container no formato `Login Page`
 * Páginas: Login, ForgotPassword, ResetPassword
 *
 * @param {React.ReactNode} children Node React Filho para renderizar conteudo
 * @param {Boolean} justify Deve justificar conteudo no meio?
 */
const Gate = ({ children }) => (
  <FlexColumn sm="100%" md="480px" xl="480px">
    <Card autoHeight padding="15px 24px">
      {children}
    </Card>
  </FlexColumn>
);

Gate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Gate;
