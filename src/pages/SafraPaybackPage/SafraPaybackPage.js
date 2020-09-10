import React from 'react';
import { Switch } from '@material-ui/core';
import { CardContainer, Container, FlexColumn } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import {
  CardActions, CardBackButton, CardDivider, CardInfo, CardSubTitle, CardTitle,
} from '../../components/Card';
import { Flex } from '../../components/Flex/Flex';
import { CardHeader } from '../../components/Card/styles';
import PercentageSlider from '../../components/PercentageSlider';
import DateTimeFilterField from '../../components/DateTimeFilterField';
import PaybackChart from '../../components/PaybackChart';

const SafraPaybackPage = () => (
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
          <PercentageSlider />
        </Flex>
        <Flex fullWidth>
          <DateTimeFilterField />
        </Flex>
        <Flex fullWidth justifyCenter>
          <PaybackChart />
        </Flex>
      </Flex>
    </Card>
  </Container>
);

export default SafraPaybackPage;
