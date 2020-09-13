import React from 'react';
import { Container } from '../../../components/Flex';
import { Card } from '../../../components/Card/Card';
import { CardHeader, CardTitle } from '../../../components/Card/styles';
import { Flex } from '../../../components/Flex/Flex';
import FundsTabs from '../../../components/FundsTabs';

const FundsPanel = () => (
  <Container>
    <Card autoHeight>
      <CardHeader>
        <Flex alignBaseline justifyBetween column>
          <CardTitle>
            Fundos
          </CardTitle>
        </Flex>
      </CardHeader>
      <FundsTabs />
    </Card>
  </Container>
);

export default FundsPanel;
