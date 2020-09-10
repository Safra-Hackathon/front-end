import styled from 'styled-components';
import { TableCell, TableContainer } from '@material-ui/core';
import { primary, secondary } from '../../styles/colors';
import * as queries from '../../styles/queries';

export const TableWrapper = styled(TableContainer)`
  thead th {
   font-weight: bold !important;
   color: ${primary};
  }
`;

export const FundTableCell = styled(TableCell)`
 font-weight: bold !important;
 color: white !important;
 background-color: ${(props) => (props.primary ? primary : secondary)};
 
 ${queries.phablet} { 
    font-size: 16px;
 }
`;
