import React from 'react';
import { Form, Formik } from 'formik';
import { Typography } from '@material-ui/core';
import { Emoji } from 'emoji-mart';
import { Container, FlexColumn } from '../../../components/Flex';
import { Card } from '../../../components/Card/Card';
import {
  CardActions, CardBackButton, CardDivider, CardInfo, CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex } from '../../../components/Flex/Flex';
import { CardHeader } from '../../../components/Card/styles';
import DateTimeFilterField from '../../../components/DateTimeFilterField';
import PaybackChart from '../../../components/PaybackChart';
import { useMobile } from '../../../hooks';
import FundsModal from '../FundsModal';
import PercentageSliderField from '../../../components/PercentageSliderField';
import OnOffSwitch from '../../../components/OnOffSwitch';
import { FundsButtonStyled, SaveButtonStyled } from './styles';
import HelperModal from '../HelperModal';
import { paybackInitialValues } from '../../../validation/payback';
import { toMoney } from '../../../utils/string';
import { usePaybackContext } from '../PaybackProvider/PaybackProvider';

const SafraPaybackPanel = () => {
  const {
    setModalFundsOpen, post, paybackData, setModalHelperOpen,
  } = usePaybackContext();
  const isMobile = useMobile();

  const SaveButton = () => (<SaveButtonStyled type="submit" variant="contained" color="primary">Salvar</SaveButtonStyled>);

  const FundsButton = () => (<FundsButtonStyled onClick={() => setModalFundsOpen(true)} variant="contained" color="secondary">Ver Investimentos</FundsButtonStyled>);

  const ActivatePayback = () => (
    <Flex column fullWidth justifyCenter alignCenter className="mt-4">
      <Emoji
        emoji=":money_with_wings:"
        size={36}
        set="twitter"
      />
      <Typography
        style={{ padding: '10px', textAlign: 'center' }}
        variant="h6"
        color="primary"
      >
        Ative o Payback para comecar a salvar e investir!
      </Typography>
    </Flex>
  );

  return (
    <>
      <Container>
        <Card autoHeight>
          <Formik
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await post({ data: values });
              } catch (e) {
                setSubmitting(false);
              }
            }}
            enableReinitialize
            initialValues={paybackInitialValues(paybackData)}
          >
            {({ handleSubmit, values }) => (
              <>
                <CardHeader>
                  <CardBackButton path="/" />
                  <Flex alignCenter column>
                    <CardTitle staticFont>
                      Safra Payback
                    </CardTitle>
                    <CardActions>
                      <OnOffSwitch name="on" onCheck={() => setModalHelperOpen(true)} />
                    </CardActions>
                  </Flex>
                </CardHeader>
                <CardDivider />
                {values.on ? (
                  <>
                    <CardInfo>
                      <Flex alignCenter column>
                        <CardTitle>
                          {toMoney(values.total)}
                        </CardTitle>
                        <CardSubTitle>Payback - Total</CardSubTitle>
                      </Flex>
                      <Flex alignCenter column>
                        <CardTitle>{toMoney(values.goal)}</CardTitle>
                        <CardSubTitle>Meta</CardSubTitle>
                      </Flex>
                    </CardInfo>
                    <CardDivider />
                    <Form onSubmit={handleSubmit}>
                      <Flex alignCenter justifyBetween fullWidth className="section mt-4">
                        <Flex fullWidth>
                          <PercentageSliderField name="percentage" />
                        </Flex>
                        <Flex fullWidth justifyBetween alignCenter>
                          <FlexColumn noPadding sm="100%" all="50%">
                            <DateTimeFilterField />
                          </FlexColumn>
                          {!isMobile && (
                          <FlexColumn all="50%">
                            <Flex justifyEnd fullWidth>
                              <SaveButton />
                              <FundsButton />
                            </Flex>
                          </FlexColumn>
                          )}
                        </Flex>
                        {isMobile && (
                          <Flex fullWidth>
                            <SaveButton />
                          </Flex>
                        )}
                        <Flex fullWidth justifyCenter>
                          <PaybackChart />
                        </Flex>
                        {isMobile && (
                          <Flex fullWidth>
                            <FundsButton />
                          </Flex>
                        )}
                      </Flex>
                    </Form>
                  </>
                ) : (<ActivatePayback />)}
              </>
            )}
          </Formik>
        </Card>
      </Container>
      <FundsModal />
      <HelperModal />
    </>
  );
};

export default SafraPaybackPanel;
