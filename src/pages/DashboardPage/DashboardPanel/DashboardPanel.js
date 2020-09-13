import React from 'react';
import { Container, Flex, FlexColumn } from '../../../components/Flex/Flex';
import WalletCard from './Cards/WalletCard';
import TransactionCard from './Cards/TransactionCard';
import FundsCard from './Cards/FundsCard';

const DashboardPanel = () => (
  <Container>
    <h1 className="page-title p-page-title">Olá, João</h1>
    <Flex fullWidth justifyBetween>
      <FlexColumn noPadding sm="100%" all="50%">
        <FlexColumn all="100%">
          <WalletCard />
        </FlexColumn>
        <FlexColumn all="100%">
          <FundsCard />
        </FlexColumn>
      </FlexColumn>
      <FlexColumn noPadding sm="100%" all="50%">
        <FlexColumn all="100%">
          <TransactionCard />
        </FlexColumn>
      </FlexColumn>
    </Flex>
  </Container>
);

export default DashboardPanel;
