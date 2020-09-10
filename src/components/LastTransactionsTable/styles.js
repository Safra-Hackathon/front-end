import styled from 'styled-components';
import { TableContainer } from '@material-ui/core';
import { primaryDark } from '../../styles/colors';
import * as queries from '../../styles/queries';

export const TableWrapper = styled(TableContainer)`
  margin: 10px;
  
  tbody td {
     font-weight: bold;
     color: ${primaryDark};
    
    ${queries.phablet} { 
        font-size: 16px;
    }
  }
  }
`;
