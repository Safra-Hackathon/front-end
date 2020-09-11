import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@material-ui/core';
import Modal from '../Modal';
import { Flex } from '../Flex/Flex';

const ConfirmModal = ({
  onConfirm, confirmText, handleClose, ...props
}) => {
  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const actions = () => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleClose} variant="outlined" color="primary">Cancelar</Button>
      <Button onClick={handleConfirm} variant="contained" color="primary">{confirmText}</Button>
    </Flex>
  );

  return (
    <Modal handleClose={handleClose} {...props} actions={actions()} />
  );
};

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  ...Modal.propTypes,
};

export default ConfirmModal;
