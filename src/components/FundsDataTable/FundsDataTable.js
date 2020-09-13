import React from 'react';
import { RemoveFromQueueOutlined, SaveAltOutlined } from '@material-ui/icons';
import EditableMaterialTable from '../EditableMaterialTable';
import { primary, secondary } from '../../styles/colors';
import { renderMoney, renderPercentage, renderWithdrawTime } from '../../utils/columns';
import { useMobile } from '../../hooks';

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

const getColumns = (isMobile, detail) => {
  if (isMobile) {
    return [
      {
        title: 'Nome',
        field: 'name',
        cellStyle: {
          // backgroundColor: primary,
          // color: '#FFF',
        },
        headerStyle: {
          color: primary,
        },
      },
      {
        title: 'Rentabilidade',
        field: 'interest',
        render: renderPercentage('interest'),
        cellStyle: {
          // backgroundColor: secondary,
          // color: '#FFF',
        },
        headerStyle: {
          color: secondary,
        },
      },
    ];
  }
  if (detail) {
    return [
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
        field: 'interest',
        render: renderPercentage('interest'),
        cellStyle: {
          backgroundColor: primary,
          color: '#FFF',
        },
        headerStyle: {
          color: primary,
        },
      }, {
        title: 'Resgate',
        field: 'withdraw_time',
        render: renderWithdrawTime('withdraw_time'),
        cellStyle: {
          backgroundColor: secondary,
          color: '#FFF',
        },
        headerStyle: {
          color: primary,
        },
      },
    ];
  }
  return [
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
      field: 'interest',
      render: renderPercentage('interest'),
      cellStyle: {
        backgroundColor: primary,
        color: '#FFF',
      },
      headerStyle: {
        color: primary,
      },
    }, {
      title: 'Minimo Aplicado',
      field: 'min',
      render: renderMoney('min'),
      cellStyle: {
        backgroundColor: primary,
        color: '#FFF',
      },
      headerStyle: {
        color: primary,
      },
    }, {
      title: 'Taxa de Administracao',
      field: 'admin_tax',
      render: renderPercentage('admin_tax'),
      cellStyle: {
        backgroundColor: primary,
        color: '#FFF',
      },
      headerStyle: {
        color: primary,
      },
    }, {
      title: 'Resgate',
      field: 'withdraw_time',
      render: renderWithdrawTime('withdraw_time'),
      cellStyle: {
        backgroundColor: secondary,
        color: '#FFF',
      },
      headerStyle: {
        color: primary,
      },
    },
  ];
};

const FundsDataTable = ({
  rows, isFavorite, onAction, loading, detail,
}) => {
  const isMobile = useMobile();
  return (
    <EditableMaterialTable
      rows={rows}
      isLoading={loading}
      columns={getColumns(isMobile, detail)}
      actions={getActions(isFavorite, onAction)}
      options={{ selection: !!onAction, paging: !isMobile, padding: detail ? 'dense' : 'default' }}
    />
  );
};

export default FundsDataTable;
