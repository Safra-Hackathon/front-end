import React, { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { getIn, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { Flex, FlexColumn } from '../Flex/Flex';
import { useMobile } from '../../hooks';
import FormikTextField from '../FormikTextField';
import MoneyTextField from '../MoneyTextField';

const PercentageSlider = ({ name, onChangeCommitted, ...props }) => {
  const { values, setFieldValue, handleChange } = useFormikContext();
  const isMobile = useMobile();
  const [internalValue, setInternalValue] = useState(getIn(values, name));

  useEffect(() => {
    if (internalValue !== getIn(values, name)) {
      setInternalValue(getIn(values, name));
    }
  }, [values]);

  return (
    <Flex fullWidth justifyAround alignCenter>
      <FlexColumn noPadding sm="100%" all="15%">
        <FormikTextField
          fullWidth
          label="%"
          name={name}
          margin="dense"
          variant="outlined"
          type="number"
          color="secondary"
          customOnChange={((event) => {
            const { value } = event.target;
            setFieldValue(name, value);
            setInternalValue(value);
          })}
          customOnBlur={(event) => {
            const { value } = event.target;
            const newValue = value > 100 ? 100 : value < 0 ? 0 : value;
            onChangeCommitted(name, newValue, setFieldValue);
            setFieldValue(name, newValue);
            onChangeCommitted(newValue);
          }}
          inputProps={{ max: 100, min: 0 }}
        />
      </FlexColumn>
      {!isMobile && (
      <FlexColumn all="85%">
        <Slider
          id={name}
          name={name}
          value={internalValue}
          onChange={((event, value) => setInternalValue(value))}
          onChangeCommitted={((event, value) => {
            onChangeCommitted(value);
            setFieldValue(name, value);
            handleChange(name);
          })}
          getAriaValueText={((v) => `${v}%`)}
          valueLabelFormat={((v) => `${v}%`)}
          aria-labelledby="discrete-slider-always"
          step={1}
          {...props}
        />
      </FlexColumn>
      )}
    </Flex>
  );
};

PercentageSlider.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PercentageSlider;
