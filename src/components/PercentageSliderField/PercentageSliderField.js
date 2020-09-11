import React from 'react';
import { FormControl, FormLabel } from '@material-ui/core';
import { FlexColumn } from '../Flex';
import { Flex } from '../Flex/Flex';
import PercentageSlider from '../PercentageSlider';

const PercentageSliderField = ({ name }) => (
  <FormControl style={{ width: '100%' }}>
    <Flex fullWidth justifyBetween alignCenter>
      <FlexColumn sm="50%" all="20%">
        <FormLabel color="primary">
          Porcentagem de Payback
        </FormLabel>
      </FlexColumn>
      <FlexColumn sm="50%" all="80%">
        <PercentageSlider name={name} />
      </FlexColumn>
    </Flex>
  </FormControl>
);

export default PercentageSliderField;
