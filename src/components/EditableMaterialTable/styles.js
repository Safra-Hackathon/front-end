import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const TableContainer = styled(Paper)`
  ${(props) => (props.fixedHeight ? 'height: 500px;' : '')}
  width: 100%;
  overflow-y: scroll;
  font-weight: 600;
  tr td:first-child.MuiTableCell-paddingNone {
    width: 100px;
  }
`;
