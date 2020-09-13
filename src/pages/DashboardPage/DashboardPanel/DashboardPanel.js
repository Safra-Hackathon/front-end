import React from 'react';
import { Container, Flex, FlexColumn } from '../../../components/Flex/Flex';
import WalletCard from './Cards/WalletCard';
import TransactionCard from './Cards/TransactionCard';
import FundsCard from './Cards/FundsCard';
import { useMobile } from '../../../hooks';

const DashboardPanel = () => {
  const isMobile = useMobile();
  return (
    <Container>
      <h1 className="page-title p-page-title mt-2">Olá, João</h1>
      <Flex fullWidth justifyBetween>
        <FlexColumn noPadding sm="100%" all="50%">
          <FlexColumn noPadding={isMobile} all="100%">
            <WalletCard />
          </FlexColumn>
          <FlexColumn noPadding={isMobile} all="100%">
            <TransactionCard />
          </FlexColumn>
        </FlexColumn>
        <FlexColumn noPadding sm="100%" all="50%">
          <FlexColumn noPadding={isMobile} all="100%">
            <FundsCard />
          </FlexColumn>
        </FlexColumn>
      </Flex>
    </Container>
  );
};

export default DashboardPanel;
