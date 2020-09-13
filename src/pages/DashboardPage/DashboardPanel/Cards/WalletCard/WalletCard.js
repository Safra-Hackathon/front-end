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

const WalletCard = () => (
  <Card autoHeight color={primary}>
    <CardTitle flex>
      Saldo
      {/* <IconInfo> */}
      <MonetizationOnOutlinedIcon />
      {/* </IconInfo> */}
    </CardTitle>
    <CardDivider />
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
          <CardText isValue>R$5000,00</CardText>
        </Flex>
        <Flex>
          <CardText isValue>1000</CardText>
        </Flex>
      </FlexColumn>
    </Flex>
  </Card>
);

export default WalletCard;
