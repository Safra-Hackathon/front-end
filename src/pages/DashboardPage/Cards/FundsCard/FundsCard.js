import React from 'react';
import { AccountBalanceOutlined } from '@material-ui/icons';
import { Card } from '../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../components/Card';
import { Flex } from '../../../../components/Flex/Flex';
import { primary } from '../../../../styles/colors';
import FundsDataTable from '../../../../components/FundsDataTable';

const FundsCard = () => (
  <Card autoHeight color={primary}>
    <CardTitle flex>
      Meus Investimentos
      {/* <IconInfo> */}
      <AccountBalanceOutlined />
      {/* </IconInfo> */}
    </CardTitle>
    <CardDivider />
    <Flex fullWidth alignBaseline className="section">
      <FundsDataTable
        rows={[
          {
            name: 'Fundo A', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,30%', retrive: 'D0', recommended: true,
          },
          {
            name: 'Fundo B', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,90%', retrive: 'D+15', recommended: true,
          }]}
      />
    </Flex>
  </Card>
);

export default FundsCard;
