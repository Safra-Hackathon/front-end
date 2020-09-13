import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';
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

const FundsModal = () => {
  const { handleCloseModalFunds, isModalFundsOpen } = usePaybackContext();
  const modalActions = () => (
    <Flex justifyBetween fullWidth>
      <Button onClick={handleCloseModalFunds} variant="outlined" color="primary">Fechar</Button>
      <Button onClick={handleCloseModalFunds} variant="contained" color="primary">Salvar</Button>
    </Flex>
  );

  return (
    <Modal
      actions={modalActions()}
      handleClose={handleCloseModalFunds}
      open={isModalFundsOpen}
      title="Meus Investimentos"
      size="md"
    >
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
                    .filter((f) => f.money > f.min).reduce((t, f) => t + f.money, 0))}
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
                      <Typography variant="subtitle2" color="primary">{f.label}</Typography>
                    </FlexColumn>
                    <PercentageSliderMoneyTextField name={`funds.${i}`} fund={f} />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </>
        )}
      </Formik>
    </Modal>
  );
};

export default FundsModal;
