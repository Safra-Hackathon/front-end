import { Button } from '@material-ui/core';
import React from 'react';
import Modal from '../../../components/Modal';
import { Flex } from '../../../components/Flex/Flex';

const HelperModal = ({ handleClose, isOpen }) => {
  const actions = () => (
    <Flex justifyEnd fullWidth>
      <Button onClick={handleClose} variant="outlined" color="primary">Fechar</Button>
    </Flex>
  );
  return (
    <Modal text="Investindo hoje, pensando no amanhã!" handleClose={handleClose} open={isOpen} size="sm" title="Sobre o Payback" actions={actions()}>
      O payback eh uma maneira para voce guardar dinheiro a cada transacao!
    </Modal>
  );
};

export default HelperModal;
