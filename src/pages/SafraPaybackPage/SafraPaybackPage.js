import React from 'react';
import SafraPaybackPanel from './SafraPaybackPanel';
import PaybackProvider from './PaybackProvider';

const SafraPaybackPage = () => (
  <PaybackProvider>
    <SafraPaybackPanel />
  </PaybackProvider>
);

export default SafraPaybackPage;
