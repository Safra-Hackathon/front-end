import {
  Paper, Table, TableBody, TableHead, TableRow,
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import { TableWrapper } from './styles';

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
        {rows.map((row) => (
          <TableRow key={row.description}>
            <TableCell>{row.description}</TableCell>
            <TableCell align="right">{row.data}</TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableWrapper>
);

export default LastTransactionsTable;
