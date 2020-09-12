import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import * as MaterialTableLocale from '../../locale/MaterialTableLocale';
import { TableContainer } from './styles';

const EditableMaterialTable = ({
  rows, options, fixedHeight,
  handleOpenModal, handleOpenHistoricModal, handleOpenDeleteModal,
  isEditable, canShowAll, setData, canAdd, canEdit, canDelete, hasHistory,
  actions, ...props
}) => {
  const [showAll, setShowAll] = useState(false);
  const [internalData, setInternalData] = useState(rows);

  useEffect(() => {
    if (canShowAll && rows && rows instanceof Array) {
      setInternalData(rows.filter((r) => !r.deleted || showAll));
    }
  }, [canShowAll, rows, showAll]);

  const onRowAdd = async (newData) => {
    try {
      const d = [...internalData];
      d.push(newData);
      setInternalData(d);
      setData(d);
    } catch (e) {
      console.log(e);
    }
  };

  const onRowUpdate = async (newData, oldData) => {
    try {
      if (oldData) {
        setInternalData((prevState) => {
          const d = [...prevState];
          d[d.indexOf(oldData)] = newData;
          setData(d);
          return d;
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onRowDelete = async (oldData) => {
    try {
      setInternalData((prevState) => {
        const d = [...prevState];
        d.splice(d.indexOf(oldData), 1);
        setData(d);
        return d;
      });
    } catch (e) {
      console.log(e);
    }
  };

  const editable = () => {
    if (isEditable) {
      return { onRowAdd, onRowUpdate, onRowDelete };
    }
  };

  const getActions = () => {
    const generatedActions = [...actions] || [];
    if (canShowAll) {
      generatedActions.push(
        {
          icon: `${showAll ? 'visibility_off' : 'visibility'}`,
          tooltip: `${showAll ? 'Mostrar Apenas Ativas' : 'Mostrar Todas'}`,
          isFreeAction: true,
          onClick: () => setShowAll(!showAll),
        },
      );
    }
    if (handleOpenHistoricModal && hasHistory) {
      generatedActions.push(
        {
          icon: 'history',
          tooltip: 'Ver Histórico',
          onClick: handleOpenHistoricModal,
        },
      );
    }
    if (handleOpenModal) {
      if (canAdd) {
        generatedActions.push(
          {
            icon: 'add',
            tooltip: 'Adicionar',
            isFreeAction: true,
            onClick: handleOpenModal,
          },
        );
      }
      if (canEdit) {
        generatedActions.push(
          (rowData) => ({
            icon: 'edit',
            tooltip: 'Editar',
            onClick: handleOpenModal,
            disabled: rowData.deleted,
          }),
        );
      }
    }
    if (handleOpenDeleteModal && canDelete) {
      generatedActions.push(
        (rowData) => ({
          icon: 'delete',
          tooltip: 'Excluir',
          onClick: handleOpenDeleteModal,
          disabled: rowData.deleted,
        }),
      );
    }
    return generatedActions;
  };

  return (
    <TableContainer fixedHeight={fixedHeight}>
      <MaterialTable
        {...props}
        data={internalData}
        localization={MaterialTableLocale.BR}
        options={{
          actionsColumnIndex: -1,
          detailPanelColumnAlignment: 'left',
          showTitle: false,
          ...options,
        }}
        actions={getActions()}
        editable={editable()}
      />
    </TableContainer>
  );
};

EditableMaterialTable.propTypes = MaterialTable.propTypes;

export default EditableMaterialTable;
