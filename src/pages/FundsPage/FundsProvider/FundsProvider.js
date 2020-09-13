import React, { useContext, useEffect, useState } from 'react';
import { useGetFunds, useGetRecommendedFunds } from '../../../requests/funds';
import { useGetInvestment, usePostInvestment } from '../../../requests/investments';
import { investmentInitialValues } from '../../../validation/investment';

const FundsContext = React.createContext();

export const useFundsContext = () => useContext(FundsContext);

const FundsProvider = ({ children }) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [{ data: allFundsData, loading: allFundsLoading }] = useGetFunds();
  const [{ data: favoritesData, loading: favoritesLoading }] = useGetInvestment(currentBalance);
  const [{
    data: recommendedFundsData,
    loading: recommendedFundsLoading,
  }] = useGetRecommendedFunds(currentBalance);
  const [{ loading: postInvestmentLoading }, postInvestment] = usePostInvestment();
  const [tab, setTab] = useState('all');

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handlePostInvestment = async (data) => {
    try {
      const investments = {
        investments: data.map((d) => investmentInitialValues(d)),
      };
      await postInvestment({ data: investments });
      setTab('favorite');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchRecommended = async () => {
      if (favoritesData) {
        try {
          const { balance } = favoritesData;
          setCurrentBalance(1000);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchRecommended();
  }, [favoritesData]);

  const initialContext = {
    allFundsData,
    recommendedFundsData,
    favoritesData,
    allFundsLoading,
    recommendedFundsLoading,
    favoritesLoading,
    postInvestment,
    postInvestmentLoading,
    handlePostInvestment,
    loading: allFundsLoading || recommendedFundsLoading || favoritesLoading,
    tab,
    handleChangeTab,
  };

  return (
    <FundsContext.Provider value={initialContext}>
      {children}
    </FundsContext.Provider>
  );
};

export default FundsProvider;
