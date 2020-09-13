import React, { useState } from 'react';
import TabContext from '@material-ui/lab/TabContext';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import FundsTables from '../FundsTables';

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
          <Tab label="Favoritos" value="favorite" />
        </TabList>
      </AppBar>
      <FundsTables rows={rows} />
    </TabContext>
  );
};

export default FundsTabs;
