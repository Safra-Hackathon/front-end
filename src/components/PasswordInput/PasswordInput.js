import React, { useState } from 'react';

import { TextField, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PropTypes from 'prop-types';

const PasswordInput = ({
  label, name, value, onChange, ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      margin="normal"
      variant="standard"
      type={showPassword ? 'text' : 'password'}
      onChange={onChange}
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
