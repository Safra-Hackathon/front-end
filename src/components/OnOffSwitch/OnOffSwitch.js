import React, { useState } from 'react';
import {
  Switch,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getIn, useFormikContext } from 'formik';
import ConfirmModal from '../ConfirmModal';

const OnOffSwitch = ({
  name, onCheck,
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
      onCheck();
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
        text="Nós estamos aqui para te apoiar a montar sua reserva. Caso tenha algum dúvida, nos colocamos à disposição para auxiliá-lo!"
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
