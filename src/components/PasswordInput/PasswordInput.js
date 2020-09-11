import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PropTypes from 'prop-types';
import FormikTextField from '../FormikTextField';

const PasswordInput = ({
  label, name, value, onChange, ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormikTextField
      label={label}
      name={name}
      margin="normal"
      variant="standard"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <IconButton style={{ padding: '0px' }} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        ),
      }}
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

PasswordInput.defaultProps = {
  label: 'Senha',
  name: 'password',
};

export default PasswordInput;
