import React, { useContext } from 'react';
import {
  useGetPayback,
  useGetPaybackTransactions,
} from '../../../requests/payback';
import { useGetInvestment } from '../../../requests/investments';

const DashboardContext = React.createContext();

export const useDashboardContext = () => useContext(DashboardContext);

const DashboardProvider = ({ children }) => {
  const [{ data: transactionData, loading: transactionLoading }] = useGetPaybackTransactions();
  const [{ data: investmentsData, loading: investmentsLoading }] = useGetInvestment();
  const [{ data: paybackData, loading: paybackLoading }] = useGetPayback();

  const initialContext = {
    transactionData,
    investmentsData,
    paybackData,
    transactionLoading,
    investmentsLoading,
    paybackLoading,
    shouldRenderTransaction: transactionData && !transactionLoading,
    loading: transactionLoading || investmentsLoading,
  };

  return (
    <DashboardContext.Provider value={initialContext}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
