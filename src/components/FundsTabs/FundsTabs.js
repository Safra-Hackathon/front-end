import React from 'react';
import TabContext from '@material-ui/lab/TabContext';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import FundsTables from '../FundsTables';
import { useFundsContext } from '../../pages/FundsPage/FundsProvider/FundsProvider';

const FundsTabs = () => {
  const { tab, handleChangeTab } = useFundsContext();
  return (
    <TabContext value={tab}>
      <AppBar position="static">
        <TabList centered onChange={handleChangeTab}>
          <Tab label="Todos" value="all" />
          <Tab label="Recomendados" value="recommended" />
          <Tab label="Favoritos" value="favorite" />
        </TabList>
      </AppBar>
      <FundsTables />
    </TabContext>
  );
};

export default FundsTabs;
