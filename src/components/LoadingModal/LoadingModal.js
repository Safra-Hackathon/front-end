import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Loading from '../Loading';

const LoadingModal = ({ open }) => (
  <>
    <Dialog PaperProps={{ style: { background: 'none', boxShadow: 'none', textAlign: 'center' } }} fullWidth open={open}>
      <DialogContent>
        <Loading notmargin="true">
          <CircularProgress />
        </Loading>
      </DialogContent>
    </Dialog>
  </>
);

LoadingModal.defaultProps = {
  open: false,
};

export default LoadingModal;
