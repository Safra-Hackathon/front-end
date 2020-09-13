import React from 'react';
import { Container } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import { CardHeader, CardTitle } from '../../components/Card/styles';
import { Flex } from '../../components/Flex/Flex';
import FundsTabs from '../../components/FundsTabs';

const rows = [
  {
    name: 'Fundo A', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,30%', retrive: 'D0', recommended: true,
  },
  {
    name: 'Fundo B', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,90%', retrive: 'D+15', recommended: true,
  },
  {
    name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31', favorite: true,
  },
  {
    name: 'Fundo A', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,30%', retrive: 'D0',
  },
  {
    name: 'Fundo B', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,90%', retrive: 'D+15',
  },
  {
    name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31',
  },
];

const FundsPage = () => (
  <Container>
    <Card autoHeight>
      <CardHeader>
        <Flex alignBaseline justifyBetween column>
          <CardTitle>
            Fundos
          </CardTitle>
        </Flex>
      </CardHeader>
      <FundsTabs rows={rows} />
    </Card>
  </Container>
);

export default FundsPage;
