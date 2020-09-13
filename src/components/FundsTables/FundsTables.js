import React from 'react';
import { Flex } from '../Flex/Flex';
import { TabContainer } from '../FundsTabs/styles';
import FundsDataTable from '../FundsDataTable';
import { useFundsContext } from '../../pages/FundsPage/FundsProvider/FundsProvider';
import LoadingModal from '../LoadingModal';

const FundsTables = () => {
  const {
    handlePostInvestment,
    allFundsData,
    recommendedFundsData,
    favoritesData,
    allFundsLoading,
    recommendedFundsLoading,
    favoritesLoading,
    postFundsLoading,
  } = useFundsContext();
  return (
    <>
      <TabContainer value="all">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable
            rows={allFundsData}
            loading={allFundsLoading}
            onAction={handlePostInvestment}
          />
        </Flex>
      </TabContainer>
      <TabContainer value="recommended">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable
            rows={recommendedFundsData && recommendedFundsData.name ? [recommendedFundsData] : []}
            loading={recommendedFundsLoading}
            onAction={handlePostInvestment}
          />
        </Flex>
      </TabContainer>
      <TabContainer value="favorite">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable
            rows={favoritesData ? favoritesData.investments : []}
            isFavorite
            onAction={handlePostInvestment}
            loading={favoritesLoading}
          />
        </Flex>
      </TabContainer>
      <LoadingModal open={postFundsLoading} />
    </>
  );
};

export default FundsTables;
