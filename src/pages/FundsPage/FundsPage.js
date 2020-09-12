import React from 'react';
import { Container } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import { CardDivider, CardHeader, CardTitle } from '../../components/Card/styles';
import { Flex } from '../../components/Flex/Flex';
import EditableMaterialTable from '../../components/EditableMaterialTable';

const columns = [
  { title: '', field: 'name' },
  { title: 'Categoria', field: 'category' },
  { title: 'Rentabilidade', field: 'rentability' },
  { title: 'Aplicacao Minima', field: 'minApplied' },
  { title: 'Taxa de Administracao', field: 'adminTax' },
  { title: 'Resgate', field: 'retrive' },
];

const FundsPage = () => (
  <>
    <Container>
      <Card autoHeight>
        <CardHeader>
          <Flex alignBaseline justifyBetween column>
            <CardTitle black>
              Fundos
            </CardTitle>
          </Flex>
        </CardHeader>
        <CardDivider />
        <Flex justifyBetween fullWidth className="section mt-4">
          <EditableMaterialTable columns={columns} />
        </Flex>
      </Card>
    </Container>
  </>
);

export default FundsPage;
