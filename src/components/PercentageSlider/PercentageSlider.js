import React from 'react';
import Slider from '@material-ui/core/Slider';
import { FormControl, FormLabel } from '@material-ui/core';
import { FlexColumn } from '../Flex';
import { Flex } from '../Flex/Flex';

const marks = [
  { value: 0, label: '0%' },
  { value: 100, label: '100%' },
];

const PercentageSlider = () => (
  <FormControl style={{ width: '100%' }}>
    <Flex fullWidth justifyBetween>
      <FlexColumn style={{ marginTop: '5px' }} sm="50%" all="20%">
        <FormLabel color="primary">
          Porcentagem de Payback
        </FormLabel>
      </FlexColumn>
      <FlexColumn sm="50%" all="80%">
        <Slider
          defaultValue={0}
          getAriaValueText={((value) => `${value}%`)}
          valueLabelFormat={((value) => `${value}%`)}
          aria-labelledby="discrete-slider-always"
          step={10}
          valueLabelDisplay="on"
        />
      </FlexColumn>
    </Flex>
  </FormControl>
);

export default PercentageSlider;
