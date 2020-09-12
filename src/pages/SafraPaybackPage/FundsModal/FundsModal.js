import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import Modal from '../../../components/Modal';
import {
  CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex, FlexColumn } from '../../../components/Flex/Flex';
import FundsChart from '../../../components/FundsChart';
import PercentageSlider from '../../../components/PercentageSlider';
import { toMoney } from '../../../utils/string';

const initialFunds = [
  {
    label: 'Fundo A', value: 20, min: 1000,
  },
  {
    label: 'Fundo A', value: 10, min: 20000,
  },
  {
    label: 'Apple', value: 15, min: 100,
  },
  {
    label: 'Google', value: 30, min: 2000,
  },
  {
    label: 'Fundo C', value: 5, min: 5000,
  }];

const FundsModal = ({ handleClose, isModalOpen }) => {
  const modalActions = () => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleClose} variant="outlined" color="primary">Fechar</Button>
      <Button onClick={handleClose} variant="contained" color="primary">Salvar</Button>
    </Flex>
  );

  const updateSliderOnChange = (funds) => (name, change, setFieldValue) => {
    const [n1, index, n2] = name.split('.');
    const fundsCopy = funds
      .map((f, i) => ({ ...f, index: i }))
      .filter((f, i) => i !== parseInt(index, 10) && f.value > 0);

    const total = fundsCopy.reduce((t, f) => f.value + t, parseInt(change, 10));
    if (total - 100 <= 0) return;

    fundsCopy.forEach((f) => {
      const fundName = `${n1}.${f.index}.${n2}`;
      const newValue = f.value * ((100 - change) / (total - change));
      setFieldValue(fundName, newValue);
    });
  };

  return (
    <Modal
      actions={modalActions()}
      handleClose={handleClose}
      open={isModalOpen}
      title="Meus Fundos"
      size="md"
    >
      <Flex alignCenter column>
        <CardTitle>
          R$5000,00
        </CardTitle>
        <CardSubTitle>Payback - Total</CardSubTitle>
        <Formik
          initialValues={{ funds: initialFunds.filter((f) => f.min <= 5000) }}
        >
          {({ values }) => (
            <Flex alignCenter justifyBetween fullWidth className="mt-4">
              <Flex fullWidth justifyBetween alignCenter>
                {values.funds.map((f, i) => (
                  <Flex fullWidth alignCenter>
                    <FlexColumn noPadding sm="30%" all="10%">
                      <Typography variant="subtitle2" color="primary">{f.label}</Typography>
                    </FlexColumn>
                    <FlexColumn noPadding sm="50%" all="75%">
                      <PercentageSlider name={`funds.${i}.value`} onChangeCommitted={updateSliderOnChange(values.funds)} valueLabelDisplay="auto" />
                    </FlexColumn>
                    <FlexColumn sm="20%" all="15%">
                      <Typography variant="subtitle2" color="primary">{toMoney((f.value / 100) * 5000)}</Typography>
                      <Typography variant="caption" color="secondary">
                        Min:
                        {toMoney(f.min)}
                      </Typography>
                    </FlexColumn>
                  </Flex>
                ))}
              </Flex>
              <Flex fullWidth justifyCenter>
                <FundsChart funds={values.funds} />
              </Flex>
            </Flex>
          )}
        </Formik>
      </Flex>
    </Modal>
  );
};

export default FundsModal;
