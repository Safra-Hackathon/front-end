import React from 'react';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { Card } from '../../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../../components/Card';
import { Flex } from '../../../../../components/Flex/Flex';
import { primary } from '../../../../../styles/colors';
import LastTransactionsTable from '../../../../../components/LastTransactionsTable';
import { useDashboardContext } from '../../../DashboardProvider/DashboardProvider';
import Loading from '../../../../../components/Loading';
import { LoadingIndicator } from '../../../../../components/ButtonProgress/styles';

const createData = (description, data, value) => ({ description, data, value });

const rows = [
  createData('Netflix', '10/08', 'R$2000,00'),
  createData('Uber', '10/08', 'R$500,00'),
  createData('iFood', '13/08', 'R$1000,00'),
  createData('SmartFit', '15/08', 'R$20,00'),
  createData('Trading', '16/08', 'R$300,00'),
];

const TransactionCard = () => {
  const { transactionData, shouldRenderTransaction } = useDashboardContext();
  return (
    <Card autoHeight color={primary}>
      <CardTitle flex>
        Últimas Transações
        {/* <IconInfo> */}
        <EqualizerOutlinedIcon />
        {/* </IconInfo> */}
      </CardTitle>
      <CardDivider />
      <Flex fullWidth alignBaseline justifyCenter>
        {shouldRenderTransaction ? <LastTransactionsTable rows={transactionData} /> : (<Loading color="secondary" />)}
      </Flex>
    </Card>
  );
};

export default TransactionCard;
