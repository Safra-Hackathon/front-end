import {
  Table, TableBody, TableHead, TableRow,
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import { FundTableCell, TableWrapper } from './styles';
import { useMobile } from '../../hooks';

const FundsTable = ({ rows }) => {
  const isMobile = useMobile();

  return (
    <TableWrapper>
      <Table padding={isMobile ? 'none' : 'default'}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Rentabilidade</TableCell>
            <TableCell align="center">Aplicacao Minima</TableCell>
            <TableCell align="center">Taxa de Administracao</TableCell>
            <TableCell align="center">Resgate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.description}>
              <FundTableCell primary>{row.name}</FundTableCell>
              <FundTableCell align="center">{row.category}</FundTableCell>
              <FundTableCell primary align="center">{row.rentability}</FundTableCell>
              <FundTableCell primary align="center">{row.minApplied}</FundTableCell>
              <FundTableCell primary align="center">{row.adminTax}</FundTableCell>
              <FundTableCell align="center">{row.retrive}</FundTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default FundsTable;
