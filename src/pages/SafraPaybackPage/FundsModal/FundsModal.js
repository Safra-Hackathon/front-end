import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import Modal from '../../../components/Modal';
import {
  CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex, FlexColumn } from '../../../components/Flex/Flex';
import FundsChart from '../../../components/FundsChart';
import { toMoney } from '../../../utils/string';
import PercentageSliderMoneyTextField from '../../../components/PercentageSliderMoneyTextField';

const initialFunds = [
  {
    label: 'Fundo A', percentage: 0, min: 1000, money: 0,
  },
  {
    label: 'Fundo A', percentage: 0, min: 20000, money: 0,
  },
  {
    label: 'Apple', percentage: 0, min: 100, money: 0,
  },
  {
    label: 'Google', percentage: 0, min: 2000, money: 0,
  },
  {
    label: 'Fundo C', percentage: 0, min: 5000, money: 0,
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
      title="Meus Investimentos"
      size="md"
    >
      <Flex alignCenter column>
        <Formik
          initialValues={{ payback: 5000, funds: initialFunds.filter((f) => f.min <= 5000) }}
        >
          {({ values }) => (
            <>
              <Flex alignCenter justifyAround fullWidth>
                <Flex column justifyCenter alignCenter>
                  <CardTitle>
                    {toMoney(values.payback)}
                  </CardTitle>
                  <CardSubTitle>Payback - Total</CardSubTitle>
                </Flex>
                <Flex column justifyCenter alignCenter>
                  <CardTitle>
                    {toMoney(values.payback - values.funds.reduce((t, f) => t + f.money, 0))}
                  </CardTitle>
                  <CardSubTitle>Payback - Restante</CardSubTitle>
                </Flex>
              </Flex>
              <Flex alignCenter justifyBetween fullWidth className="mt-4">
                <Flex fullWidth justifyBetween alignCenter>
                  {values.funds.map((f, i) => (
                    <Flex fullWidth alignCenter>
                      <FlexColumn noPadding sm="30%" all="10%">
                        <Typography variant="subtitle2" color="primary">{f.label}</Typography>
                      </FlexColumn>
                      <PercentageSliderMoneyTextField name={`funds.${i}`} fund={f} />
                    </Flex>
                  ))}
                </Flex>
                <Flex fullWidth justifyCenter>
                  <FundsChart funds={values.funds} />
                </Flex>
              </Flex>
            </>
          )}
        </Formik>
      </Flex>
    </Modal>
  );
};

export default FundsModal;
