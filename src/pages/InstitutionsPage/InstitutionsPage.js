import React from 'react';
import { Container } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import {
  CardDivider, CardHeader, CardTitle,
} from '../../components/Card/styles';
import { Flex } from '../../components/Flex/Flex';
import EditableMaterialTable from '../../components/EditableMaterialTable';

// const line = [
//   { price: 'R$30,00', description: 'Carta de agradecimento' },
//   { price: 'R$150,00', description: 'Grip Crossfit Barigui' },
//   { price: 'R$487,00', description: 'Sua Doação Total', actual: true },
//   { price: 'R$500,00', description: 'Moletom Crossfit Barigui' },
//   { price: 'R$1000,00', description: 'Conversão de plano de horário light para horário livre' },
// ];

const InstitutionsPage = () => (
  <>
    <Container>
      <Card autoHeight>
        <CardHeader>
          <Flex alignBaseline justifyBetween column>
            <CardTitle black>
              Instituicoes
            </CardTitle>
          </Flex>
        </CardHeader>
        <CardDivider />
        <Flex justifyBetween fullWidth className="section mt-4">
          <EditableMaterialTable />
        </Flex>
      </Card>
    </Container>
  </>
);

export default InstitutionsPage;
