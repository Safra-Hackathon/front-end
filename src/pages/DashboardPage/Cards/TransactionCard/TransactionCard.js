import React from 'react';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import {
  Paper,
  Table, TableBody, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import { Card } from '../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../components/Card';
import { Flex } from '../../../../components/Flex/Flex';
import { primary, primaryLight } from '../../../../styles/colors';
import LastTransactionsTable from '../../../../components/LastTransactionsTable';

const createData = (description, data, value) => ({ description, data, value });

const rows = [
  createData('Netflix', '10/08', 'R$2000,00'),
  createData('Uber', '10/08', 'R$500,00'),
  createData('iFood', '13/08', 'R$1000,00'),
  createData('SmartFit', '15/08', 'R$20,00'),
  createData('Trading', '16/08', 'R$300,00'),

];

const TransactionCard = () => (
  <Card autoHeight color={primary}>
    <CardTitle flex>
      Últimas Transações
      {/* <IconInfo> */}
      <EqualizerOutlinedIcon />
      {/* </IconInfo> */}
    </CardTitle>
    <CardDivider />
    <Flex fullWidth alignBaseline>
      <LastTransactionsTable rows={rows} />
    </Flex>
  </Card>
);

export default TransactionCard;
