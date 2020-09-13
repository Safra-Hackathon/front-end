import React, { useContext, useState } from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import { useGetPayback, useGetPaybackHistoryChart, usePostPayback } from '../../../requests/payback';

const formatDateQuery = (date) => format(date, 'yyyy-MM-dd');

const PaybackContext = React.createContext();

export const usePaybackContext = () => useContext(PaybackContext);

const PaybackProvider = ({ children }) => {
  const [{ data: paybackData, loading: paybackLoading }] = useGetPayback();
  const [, postPayback] = usePostPayback();
  const [startDate, setStartDate] = useState(formatDateQuery(subMonths(new Date(), 2)));
  const [endDate, setEndDate] = useState(formatDateQuery(addMonths(new Date(), 2)));
  const [{ data: chartData, loading: chartLoading }, refetchChart] = useGetPaybackHistoryChart(startDate, endDate);
  const [isModalFundsOpen, setModalFundsOpen] = useState(false);
  const [isModalHelperOpen, setModalHelperOpen] = useState(false);

  const handleCloseModalFunds = () => {
    setModalFundsOpen(false);
  };

  const handleCloseModalHelper = () => {
    setModalHelperOpen(false);
  };

  const onDateChange = async () => {
    await refetchChart();
  };

  const initialContext = {
    paybackData,
    paybackLoading,
    chartData,
    chartLoading,
    postPayback,
    isModalFundsOpen,
    setModalFundsOpen,
    isModalHelperOpen,
    setModalHelperOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleCloseModalFunds,
    handleCloseModalHelper,
    onDateChange,
    loading: chartLoading || paybackLoading,
  };

  return (
    <PaybackContext.Provider value={initialContext}>
      {children}
    </PaybackContext.Provider>
  );
};

export default PaybackProvider;
