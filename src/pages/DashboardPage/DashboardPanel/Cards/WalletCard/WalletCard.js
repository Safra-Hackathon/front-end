import React from 'react';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { FlexColumn } from '../../../../../components/Flex';
import { Card } from '../../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../../components/Card';
import { Flex } from '../../../../../components/Flex/Flex';
import { primary } from '../../../../../styles/colors';
import { CardText } from '../../../../../components/Card/styles';
import { useDashboardContext } from '../../../DashboardProvider/DashboardProvider';
import Loading from '../../../../../components/Loading';
import { toMoney } from '../../../../../utils/string';

const WalletCard = () => {
  const { paybackData, paybackLoading } = useDashboardContext();
  return (
    <Card autoHeight color={primary}>
      <CardTitle flex>
        Saldo
        <MonetizationOnOutlinedIcon />
      </CardTitle>
      <CardDivider />
      {(!paybackData || paybackLoading) ? <Loading color="secondary" /> : (
        <Flex fullWidth alignBaseline>
          <FlexColumn all="50%">
            <Flex>
              <CardText>Payback</CardText>
            </Flex>
            <Flex>
              <CardText>Pontos</CardText>
            </Flex>
          </FlexColumn>
          <FlexColumn all="50%">
            <Flex>
              <CardText isValue>{toMoney(parseFloat(paybackData.total))}</CardText>
            </Flex>
            <Flex>
              <CardText isValue>1000</CardText>
            </Flex>
          </FlexColumn>
        </Flex>
      )}

    </Card>
  );
};

export default WalletCard;
