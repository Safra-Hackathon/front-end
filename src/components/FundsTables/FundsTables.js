import React from 'react';
import { Flex } from '../Flex/Flex';
import { TabContainer } from '../FundsTabs/styles';
import FundsDataTable from '../FundsDataTable';
import { usePostInvestment } from '../../requests/investments';

const FundsTables = ({ rows }) => {
  const [, postInvestment] = usePostInvestment();

  const handlePost = async (data) => {
    try {
      await postInvestment(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TabContainer value="all">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable rows={rows} />
        </Flex>
      </TabContainer>
      <TabContainer value="recommended">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable rows={rows.filter((r) => r.recommended)} />
        </Flex>
      </TabContainer>
      <TabContainer value="favorite">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable
            rows={rows.filter((r) => r.favorite)}
            isFavorite
            onAction={handlePost}
          />
        </Flex>
      </TabContainer>
    </>
  );
};

export default FundsTables;
