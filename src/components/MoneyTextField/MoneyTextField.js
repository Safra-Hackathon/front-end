import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import FormikTextField from '../FormikTextField';

const MoneyFormat = ({
  inputRef, onChange, name, isText, ...other
}) => (
  <>
    <NumberFormat
      displayType={isText ? 'text' : 'input'}
      getInputRef={inputRef}
      onValueChange={(values) => {
        if (onChange) {
          onChange({
            target: {
              name,
              value: values.floatValue,
            },
          });
        }
      }}
      name={name}
      decimalScale={2}
      fixedDecimalScale
      allowEmptyFormatting
      defaultValue={0}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$"
      isNumericString
      {...other}
    />
  </>
);

const MoneyTextField = ({
  name, ...other
}) => (
  <FormikTextField
    name={name}
    InputProps={{
      inputComponent: MoneyFormat,
    }}
    {...other}
  />
);

MoneyTextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MoneyTextField;
