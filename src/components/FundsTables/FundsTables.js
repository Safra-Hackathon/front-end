import React from 'react';
import { Container, Flex } from '../Flex/Flex';
import { Card } from '../Card/Card';
import { CardHeader, CardTitle } from '../Card/styles';
import FundsTabs from '../FundsTabs';

const FundsTables = (props) => (
  <Container>
    <Card autoHeight>
      <CardHeader>
        <Flex alignBaseline justifyBetween column>
          <CardTitle>
            Fundos
          </CardTitle>
        </Flex>
      </CardHeader>
      <FundsTabs {...props} />
    </Card>
  </Container>
);

export default FundsTables;
