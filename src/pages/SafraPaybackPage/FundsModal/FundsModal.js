import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import Tooltip from '@material-ui/core/Tooltip';
import { InfoOutlined } from '@material-ui/icons';
import Modal from '../../../components/Modal';
import {
  CardDivider,
  CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex, FlexColumn } from '../../../components/Flex/Flex';
import FundsChart from '../../../components/FundsChart';
import { toMoney } from '../../../utils/string';
import PercentageSliderMoneyTextField from '../../../components/PercentageSliderMoneyTextField';
import { usePaybackContext } from '../PaybackProvider/PaybackProvider';
import { investmentInitialValues } from '../../../validation/investment';
import ButtonModalProgress from '../../../components/ButtonModalProgress';

const FundsModal = () => {
  const {
    handleCloseModalFunds, isModalFundsOpen, investmentsData, investmentsLoading, postInvestment,
  } = usePaybackContext();
  const modalActions = (isSubmitting, handleSubmit) => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleCloseModalFunds} variant="outlined" color="primary">Fechar</Button>
      <ButtonModalProgress
        onClick={handleSubmit}
        disabled={isSubmitting}
        variant="contained"
        color="primary"
      >
        Salvar
      </ButtonModalProgress>
    </Flex>
  );

  if (!investmentsData || investmentsLoading) return <></>;

  return (
    <Formik
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await postInvestment({
            data: {
              investments: values.funds.map((f) => {
                if (f.amount < f.min) {
                  return { ...f, amount: 0 };
                }
                return f;
              }),
            },
          });
        } catch (e) {
          console.log(e);
          setSubmitting(false);
        } finally {
          handleCloseModalFunds();
        }
      }}
      enableReinitialize
      initialValues={{
        payback: 5000,
        funds: investmentsData.investments
          .map((f) => investmentInitialValues(f)).filter((f) => f.min <= 5000),
      }}
    >
      {({ values, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Modal
            actions={modalActions(isSubmitting, handleSubmit)}
            handleClose={handleCloseModalFunds}
            open={isModalFundsOpen}
            title="Meus Investimentos"
            size="md"
          >
            <>
              <Flex alignCenter justifyAround fullWidth>
                <Flex column justifyCenter alignCenter>
                  <CardTitle>
                    {toMoney(values.payback)}
                  </CardTitle>
                  <CardSubTitle>
                    Payback - Atual
                    <Tooltip placement="bottom" title="Total recebido de Payback.">
                      <InfoOutlined />
                    </Tooltip>
                  </CardSubTitle>
                </Flex>
                <Flex column justifyCenter alignCenter>
                  <CardTitle>
                    {toMoney(values.payback - values.funds
                      .filter((f) => f.amount > f.min).reduce((t, f) => t + f.amount, 0))}
                  </CardTitle>
                  <CardSubTitle>
                    Payback - Restante
                    <Tooltip placement="bottom" title="Caso não atinja o valor mínimo a ser investido, o dinheiro continuará em sua carteira.">
                      <InfoOutlined />
                    </Tooltip>
                  </CardSubTitle>
                </Flex>
              </Flex>
              <CardDivider />
              <Flex alignCenter justifyBetween fullWidth className="mt-4">
                <Flex fullWidth justifyCenter>
                  <FundsChart funds={values.funds} />
                </Flex>
                <Flex fullWidth justifyBetween alignCenter>
                  {values.funds.map((f, i) => (
                    <Flex key={i} fullWidth alignCenter>
                      <FlexColumn noPadding sm="30%" all="10%">
                        <Typography variant="subtitle2" color="primary">{f.name}</Typography>
                      </FlexColumn>
                      <PercentageSliderMoneyTextField name={`funds.${i}`} fund={f} />
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </>
          </Modal>
        </Form>
      )}
    </Formik>

  );
};

export default FundsModal;
