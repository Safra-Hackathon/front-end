import React from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { Flex, FlexColumn } from '../Flex/Flex';
import PercentageSlider from '../PercentageSlider';
import { toMoney } from '../../utils/string';
import { MinInvestmentLabel } from './styles';
import MoneyTextField from '../MoneyTextField';
import { useMobile } from '../../hooks';

const PercentageSliderMoneyTextField = ({ name, fund }) => {
  const { values, setFieldValue } = useFormikContext();
  const isMobile = useMobile();

  const updateSliderOnChange = (change) => {
    const [n1, index] = name.split('.');
    const fundsCopy = values.funds
      .map((f, i) => ({ ...f, index: i }))
      .filter((f, i) => i !== parseInt(index, 10));

    setFieldValue(`${n1}.${index}.amount`, (change / 100) * values.payback);

    const total = fundsCopy.reduce((t, f) => f.percentage + t, parseInt(change, 10));
    if (total - 100 > 0) {
      fundsCopy.forEach((f) => {
        const newValue = f.percentage * ((100 - change) / (total - change));
        const fundName = `${n1}.${f.index}`;
        setFieldValue(`${fundName}.percentage`, newValue);
        setFieldValue(`${fundName}.amount`, (newValue / 100) * values.payback);
      });
    }
  };

  const handleMoneyChange = (event) => {
    const { value } = event.target;
    const newValue = value > values.payback ? values.payback : value < 0 ? 0 : value;
    setFieldValue(`${name}.percentage`, (newValue / values.payback) * 100);
    setFieldValue(`${name}.amount`, newValue);
    updateSliderOnChange((newValue / values.payback) * 100);
  };

  return (
    <Flex fullWidth alignCenter>
      <FlexColumn noPadding sm="30%" all="80%">
        <PercentageSlider name={`${name}.percentage`} onChangeCommitted={updateSliderOnChange} valueLabelDisplay="auto" />
      </FlexColumn>
      <FlexColumn sm="70%" all="20%" styles={{ marginBottom: isMobile ? '-20px' : '-10px' }}>
        <MoneyTextField
          fullWidth
          name={`${name}.amount`}
          variant="outlined"
          margin="dense"
          label="$"
          color="secondary"
          customOnChange={handleMoneyChange}
          // customOnBlur={handleMoneyChange}
        />
        <MinInvestmentLabel ltMin={(fund.percentage / 100) * values.payback < fund.min}>
          Min:
          {toMoney(fund.min)}
        </MinInvestmentLabel>
      </FlexColumn>
    </Flex>
  );
};

PercentageSliderMoneyTextField.propTypes = {
  name: PropTypes.string.isRequired,
  fund: PropTypes.object.isRequired,
};

export default PercentageSliderMoneyTextField;
