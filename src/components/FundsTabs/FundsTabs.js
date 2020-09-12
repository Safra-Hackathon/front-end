import React, { useState } from 'react';
import TabContext from '@material-ui/lab/TabContext';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import {
  FavoriteBorderOutlined, NotInterested,
} from '@material-ui/icons';
import EditableMaterialTable from '../EditableMaterialTable';
import { Flex } from '../Flex/Flex';
import { TabContainer } from './styles';
import { muiColors, primary, secondary } from '../../styles/colors';

const FundsTabs = ({ rows }) => {
  const [tab, setTab] = useState('all');
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const getActions = (isPayback = false) => [
    {
      tooltip: 'Remove All Selected Users',
      icon: () => (isPayback ? <NotInterested /> : <FavoriteBorderOutlined />),
      onClick: (evt, data) => alert(`You want to delete ${data.length} rows`),
    },
  ];

  const getColumns = (isRecommended = false) => [{
    title: 'Nome',
    field: 'name',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Categoria',
    field: 'category',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : secondary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Rentabilidade',
    field: 'rentability',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Minimo Aplicado',
    field: 'minApplied',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Taxa de Administracao',
    field: 'adminTax',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Resgate',
    field: 'retrive',
    cellStyle: {
      backgroundColor: isRecommended ? muiColors.yellow : secondary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  },
  ];

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
          <EditableMaterialTable
            rows={rows}
            columns={getColumns()}
            actions={getActions()}
            options={{ selection: true }}
          />
        </Flex>
      </TabContainer>
      <TabContainer value="recommended">
        <Flex justifyBetween fullWidth className="section">
          <EditableMaterialTable
            rows={[{
              name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31',
            }]}
            columns={getColumns(true)}
            actions={getActions()}
            options={{ selection: true }}
          />
        </Flex>
      </TabContainer>
      <TabContainer value="payback">
        <Flex justifyBetween fullWidth className="section">
          <EditableMaterialTable
            rows={[{
              name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31',
            }]}
            columns={getColumns()}
            actions={getActions(true)}
            options={{ selection: true }}
          />
        </Flex>
      </TabContainer>
    </TabContext>
  );
};

export default FundsTabs;
