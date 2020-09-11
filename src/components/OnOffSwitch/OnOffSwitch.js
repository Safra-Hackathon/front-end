import React, { useState } from 'react';
import {
  Switch,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getIn, useFormikContext } from 'formik';
import ConfirmModal from '../ConfirmModal';

const OnOffSwitch = ({
  name,
}) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const { values, setFieldValue, handleChange } = useFormikContext();
  const value = getIn(values, name);

  const handleSwitchChange = (checked) => {
    setFieldValue(name, checked);
    handleChange(name);
  };

  const handleSwitch = (event) => {
    if (value) {
      setConfirmModal(true);
    } else {
      handleSwitchChange(!!event.target.checked);
    }
  };

  return (
    <>
      <FormControlLabel
        checked={value}
        label={value ? 'On' : 'Off'}
        control={<Switch onChange={handleSwitch} />}
      />
      <ConfirmModal
        open={confirmModal}
        onConfirm={() => handleSwitchChange(false)}
        confirmText="SIM"
        title="Tem certeza que deseja desligar o Payback?"
        handleClose={() => setConfirmModal(false)}
      />
    </>
  );
};

OnOffSwitch.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OnOffSwitch;
