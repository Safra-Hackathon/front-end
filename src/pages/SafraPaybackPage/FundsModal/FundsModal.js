import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import Modal from '../../../components/Modal';
import {
  CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex, FlexColumn } from '../../../components/Flex/Flex';
import FundsChart from '../../../components/FundsChart';
import CompletionBar from '../../../components/CompletionBar';
import PercentageSlider from '../../../components/PercentageSlider';

const initialFunds = [
  {
    label: 'Fundo A', value: 20,
  },
  {
    label: 'Fundo A', value: 10,
  },
  {
    label: 'Apple', value: 15,
  },
  {
    label: 'Google', value: 30,
  },
  {
    label: 'Fundo C', value: 5,
  }];

const FundsModal = ({ handleClose, isModalOpen }) => {
  const modalActions = () => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleClose} variant="outlined" color="primary">Fechar</Button>
      <Button onClick={handleClose} variant="contained" color="primary">Salvar</Button>
    </Flex>
  );

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
          initialValues={{ funds: initialFunds }}
          render={({ values }) => (
            <Flex alignCenter justifyBetween fullWidth className="mt-4">
              <Flex fullWidth justifyBetween alignCenter>
                {values.funds.map((f, i) => (
                  <Flex fullWidth alignCenter>
                    <FlexColumn noPadding sm="30%" all="10%">
                      <Typography variant="subtitle2" color="primary">{f.label}</Typography>
                    </FlexColumn>
                    <FlexColumn noPadding sm="50%" all="75%">
                      <PercentageSlider name={`funds.${i}.value`} valueLabelDisplay="auto" />
                    </FlexColumn>
                    <FlexColumn sm="20%" all="15%">
                      <Typography variant="subtitle2" color="primary">{`R$${(f.value / 100) * 5000}`}</Typography>
                    </FlexColumn>
                  </Flex>
                ))}
              </Flex>
              <Flex fullWidth justifyCenter>
                <FundsChart funds={values.funds} />
              </Flex>
            </Flex>
          )}
        />
      </Flex>
    </Modal>
  );
};

export default FundsModal;
