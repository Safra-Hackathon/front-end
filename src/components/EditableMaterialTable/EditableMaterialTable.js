import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import * as MaterialTableLocale from '../../locale/MaterialTableLocale';
import { TableContainer } from './styles';

const EditableMaterialTable = ({
  rows, options, fixedHeight,
  handleOpenModal, handleOpenHistoricModal, handleOpenDeleteModal,
  isEditable, canShowAll, setData, canAdd, canEdit, canDelete, hasHistory,
  actions, ...props
}) => (
  <TableContainer>
    <MaterialTable
      {...props}
      data={rows}
      localization={MaterialTableLocale.BR}
      options={{
        actionsColumnIndex: -1,
        detailPanelColumnAlignment: 'left',
        showTitle: false,
        ...options,
      }}
      actions={actions}
    />
  </TableContainer>
);

EditableMaterialTable.propTypes = MaterialTable.propTypes;

export default EditableMaterialTable;
