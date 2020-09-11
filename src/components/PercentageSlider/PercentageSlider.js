import React from 'react';
import Slider from '@material-ui/core/Slider';

const marks = [
  { value: 0, label: '0%' },
  { value: 100, label: '100%' },
];

const PercentageSlider = ({ value, ...props }) => (
  <Slider
    value={value}
    defaultValue={0}
    getAriaValueText={((v) => `${v}%`)}
    valueLabelFormat={((v) => `${v}%`)}
    aria-labelledby="discrete-slider-always"
    step={10}
    {...props}
  />
);

export default PercentageSlider;
