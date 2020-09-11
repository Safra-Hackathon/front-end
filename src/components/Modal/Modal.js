import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useMobile } from '../../hooks';
import { Title } from './styles';

const Modal = ({
  open,
  handleClose,
  title,
  text,
  children,
  actions,
  size,
}) => {
  const fullScreen = useMobile();
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth={size}
      fullWidth
    >
      <Title>{title}</Title>
      <DialogContent>
        {title && <DialogContentText>{text}</DialogContentText>}
        {children}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string,
  actions: PropTypes.node,
};

export default Modal;
