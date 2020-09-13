import React from 'react';
import { FavoriteBorderOutlined, NotInterested } from '@material-ui/icons';
import { Container, Flex } from '../Flex/Flex';
import { Card } from '../Card/Card';
import { CardHeader, CardTitle } from '../Card/styles';
import FundsTabs from '../FundsTabs';
import EditableMaterialTable from '../EditableMaterialTable';
import { muiColors, primary, secondary } from '../../styles/colors';

const getActions = (isPayback = false) => [
  {
    tooltip: 'Remove All Selected Users',
    icon: () => (isPayback ? <NotInterested /> : <FavoriteBorderOutlined />),
    onClick: (evt, data) => alert(`You want to delete ${data.length} rows`),
  },
];

const getColumns = (isRecommended = false) => [
  {
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

const FundsDataTable = ({
  rows, selection, isRecommended, isFavorite,
}) => (
  <EditableMaterialTable
    rows={rows}
    columns={getColumns(isRecommended)}
    actions={getActions(isFavorite)}
    options={{ selection }}
  />
);

export default FundsDataTable;
