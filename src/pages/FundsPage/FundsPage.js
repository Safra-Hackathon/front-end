import React from 'react';
import FundsProvider from './FundsProvider';
import FundsPanel from './FundsPanel';

const FundsPage = () => (
  <FundsProvider>
    <FundsPanel />
  </FundsProvider>
);

export default FundsPage;
