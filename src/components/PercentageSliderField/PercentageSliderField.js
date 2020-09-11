import React from 'react';
import { FormControl, FormLabel } from '@material-ui/core';
import { FlexColumn } from '../Flex';
import { Flex } from '../Flex/Flex';
import PercentageSlider from '../PercentageSlider';

const PercentageSliderField = ({ value }) => (
  <FormControl style={{ width: '100%' }}>
    <Flex fullWidth justifyBetween>
      <FlexColumn style={{ marginTop: '5px' }} sm="50%" all="20%">
        <FormLabel color="primary">
          Porcentagem de Payback
        </FormLabel>
      </FlexColumn>
      <FlexColumn sm="50%" all="80%">
        <PercentageSlider value={value} valueLabelDisplay="on" />
      </FlexColumn>
    </Flex>
  </FormControl>
);

export default PercentageSliderField;
