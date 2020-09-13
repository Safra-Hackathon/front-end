import React, { useState } from 'react';
import TabContext from '@material-ui/lab/TabContext';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import { Flex } from '../Flex/Flex';
import { TabContainer } from './styles';
import FundsDataTable from '../FundsDataTable';

const FundsTabs = ({ rows }) => {
  const [tab, setTab] = useState('all');
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <TabContext value={tab}>
      <AppBar position="static">
        <TabList centered onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Todos" value="all" />
          <Tab label="Recomendados" value="recommended" />
          <Tab label="Payback" value="payback" />
        </TabList>
      </AppBar>
      <TabContainer value="all">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable rows={rows} selection />
        </Flex>
      </TabContainer>
      <TabContainer value="recommended">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable rows={rows.filter((r) => r.recommended)} isRecommended selection />
        </Flex>
      </TabContainer>
      <TabContainer value="payback">
        <Flex justifyBetween fullWidth className="section">
          <FundsDataTable rows={rows.filter((r) => r.favorite)} isFavorite selection />
        </Flex>
      </TabContainer>
    </TabContext>
  );
};

export default FundsTabs;
