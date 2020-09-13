import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import LoadingModal from '../LoadingModal';

const ButtonModalProgress = ({ children, disabled, ...props }) => (
  <>
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
    <LoadingModal open={disabled} />
  </>
);

ButtonModalProgress.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

ButtonModalProgress.defaultProps = {
  disabled: false,
};

export default ButtonModalProgress;
