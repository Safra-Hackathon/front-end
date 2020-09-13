import React from 'react';
import { RemoveFromQueueOutlined, SaveAltOutlined } from '@material-ui/icons';
import EditableMaterialTable from '../EditableMaterialTable';
import { primary, secondary } from '../../styles/colors';

const getActions = (isPayback = false, onAction) => {
  if (!onAction) return [];
  return [
    {
      tooltip: isPayback ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos',
      icon: () => (isPayback ? <RemoveFromQueueOutlined /> : <SaveAltOutlined />),
      onClick: (evt, data) => onAction(data),
    },
  ];
};

const getColumns = () => [
  {
    title: 'Nome',
    field: 'name',
    cellStyle: {
      backgroundColor: primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Categoria',
    field: 'category',
    cellStyle: {
      backgroundColor: secondary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Rentabilidade',
    field: 'rentability',
    cellStyle: {
      backgroundColor: primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Minimo Aplicado',
    field: 'minApplied',
    cellStyle: {
      backgroundColor: primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Taxa de Administracao',
    field: 'adminTax',
    cellStyle: {
      backgroundColor: primary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  }, {
    title: 'Resgate',
    field: 'retrive',
    cellStyle: {
      backgroundColor: secondary,
      color: '#FFF',
    },
    headerStyle: {
      color: primary,
    },
  },
];

const FundsDataTable = ({
  rows, isFavorite, onAction,
}) => (
  <EditableMaterialTable
    rows={rows}
    columns={getColumns()}
    actions={getActions(isFavorite, onAction)}
    options={{ selection: !!onAction }}
  />
);

export default FundsDataTable;
