import React from 'react';
import { AccountBalanceOutlined } from '@material-ui/icons';
import { Card } from '../../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../../components/Card';
import { Flex } from '../../../../../components/Flex/Flex';
import { primary } from '../../../../../styles/colors';
import FundsDataTable from '../../../../../components/FundsDataTable';
import { useDashboardContext } from '../../../DashboardProvider/DashboardProvider';

const FundsCard = () => {
  const { investmentsData, investmentsLoading } = useDashboardContext();
  return (
    <Card autoHeight color={primary}>
      <CardTitle flex>
        Meus Investimentos
        <AccountBalanceOutlined />
      </CardTitle>
      <CardDivider />
      <Flex fullWidth alignBaseline className="section">
        <FundsDataTable
          detail
          loading={investmentsLoading}
          rows={investmentsData ? investmentsData.investments : []}
        />
      </Flex>
    </Card>
  );
};

export default FundsCard;
