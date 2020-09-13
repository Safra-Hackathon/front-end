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
