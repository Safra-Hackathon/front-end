import PropTypes from 'prop-types';
import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Modal from '../Modal';
import { Flex } from '../Flex/Flex';

const ConfirmModal = ({
  onConfirm, confirmText, handleClose, text, ...props
}) => {
  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const actions = () => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleConfirm} variant="outlined" color="primary">{confirmText}</Button>
      <Button onClick={handleClose} variant="contained" color="primary">Cancelar</Button>
    </Flex>
  );

  return (
    <Modal handleClose={handleClose} {...props} actions={actions()}>
      <Flex fullWidth>
        <Typography className="text-center" variant="body1">
          {text}
        </Typography>
      </Flex>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  ...Modal.propTypes,
};

export default ConfirmModal;
