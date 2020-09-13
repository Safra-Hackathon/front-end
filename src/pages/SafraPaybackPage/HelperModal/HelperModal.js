import { Button } from '@material-ui/core';
import React from 'react';
import Modal from '../../../components/Modal';
import { Flex } from '../../../components/Flex/Flex';
import { usePaybackContext } from '../PaybackProvider/PaybackProvider';

const HelperModal = () => {
  const { handleCloseModalHelper, isModalHelperOpen } = usePaybackContext();
  const actions = () => (
    <Flex justifyEnd fullWidth>
      <Button onClick={handleCloseModalHelper} variant="outlined" color="primary">Fechar</Button>
    </Flex>
  );
  return (
    <Modal
      text="Investindo hoje, pensando no amanhã!"
      handleClose={handleCloseModalHelper}
      open={isModalHelperOpen}
      size="sm"
      title="Sobre o Payback"
      actions={actions()}
    >
      O Payback é uma maneira de você guardar dinheiro para investimento a cada transação recebida!
    </Modal>
  );
};

export default HelperModal;
