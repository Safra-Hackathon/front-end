import React, { useState } from 'react';
import { Button, Switch } from '@material-ui/core';
import { Container } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import {
  CardActions, CardBackButton, CardDivider, CardInfo, CardSubTitle, CardTitle,
} from '../../components/Card';
import { Flex } from '../../components/Flex/Flex';
import { CardHeader } from '../../components/Card/styles';
import DateTimeFilterField from '../../components/DateTimeFilterField';
import PaybackChart from '../../components/PaybackChart';
import { useMobile } from '../../hooks';
import FundsModal from './FundsModal';
import PercentageSliderField from '../../components/PercentageSliderField';

const SafraPaybackPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isMobile = useMobile();
  return (
    <>
      <Container>
        <Card autoHeight>
          <CardHeader>
            <CardBackButton />
            <Flex alignCenter column>
              <CardTitle>
                Safra Payback
              </CardTitle>
              <CardActions>
                <Switch />
              </CardActions>
            </Flex>
          </CardHeader>
          <CardDivider />
          <CardInfo>
            <Flex alignCenter column>
              <CardTitle>
                R$5000,00
              </CardTitle>
              <CardSubTitle>Payback - Total</CardSubTitle>
            </Flex>
            <Flex alignCenter column>
              <CardTitle>R$20000,00</CardTitle>
              <CardSubTitle>Meta</CardSubTitle>
            </Flex>
          </CardInfo>
          <CardDivider />
          <Flex alignCenter justifyBetween fullWidth className="section mt-4">
            <Flex fullWidth>
              <PercentageSliderField />
            </Flex>
            <Flex fullWidth justifyBetween alignCenter>
              <DateTimeFilterField />
              {!isMobile && <Button onClick={() => setModalOpen(true)} variant="contained" color="primary">Ver Fundos</Button>}
            </Flex>
            <Flex fullWidth justifyCenter>
              <PaybackChart />
            </Flex>
            <Flex fullWidth>
              {isMobile && (
              <Button
                onClick={() => setModalOpen(true)}
                className="mt-2"
                style={{ width: '100%' }}
                variant="contained"
                color="primary"
              >
                Ver Fundos
              </Button>
              )}
            </Flex>
          </Flex>
        </Card>
      </Container>
      <FundsModal handleClose={() => setModalOpen(false)} isModalOpen={isModalOpen} />
    </>
  );
};

export default SafraPaybackPage;
