import {
  Paper, Table, TableBody, TableHead, TableRow,
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import { format } from 'date-fns';
import { TableWrapper } from './styles';
import { paybackTransactionInitialValues } from '../../validation/payback';
import { toMoney } from '../../utils/string';

const LastTransactionsTable = ({ rows }) => (
  <TableWrapper component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Descrição</TableCell>
          <TableCell align="right">Data</TableCell>
          <TableCell align="right">Valor</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => {
          const mappedRow = paybackTransactionInitialValues(row);
          return (
            <TableRow key={index}>
              <TableCell>{mappedRow.information}</TableCell>
              <TableCell align="right">{format(mappedRow.data, 'dd/MM/yyyy')}</TableCell>
              <TableCell align="right">{toMoney(mappedRow.amount)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableWrapper>
);

export default LastTransactionsTable;
