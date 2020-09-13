import React, { useContext } from 'react';
import {
  useGetPaybackTransactions,
} from '../../../requests/payback';

const DashboardContext = React.createContext();

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardProvider = ({ children }) => {
  const [{ data: transactionData, loading: transactionLoading }] = useGetPaybackTransactions();

  const initialContext = {
    transactionData,
    shouldRenderTransaction: transactionData && !transactionLoading,
    loading: transactionLoading,
  };

  return (
    <DashboardContext.Provider value={initialContext}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
