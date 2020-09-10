import styled from 'styled-components';
import { ListItemSecondaryAction } from '@material-ui/core';
import * as queries from '../../styles/queries';

export const ItemProgress = styled(ListItemSecondaryAction)`
  width: 70%;
  top: 45%;
  
  ${queries.phablet} { 
        width: 80%;
    }
`;
