import styled from 'styled-components';
import { Avatar, ListItemSecondaryAction } from '@material-ui/core';
import * as queries from '../../styles/queries';
import { primary } from '../../styles/colors';

export const ItemProgress = styled(ListItemSecondaryAction)`
  width: 70%;
  top: 45%;
  
  ${queries.phablet} { 
        width: 80%;
    }
`;

export const ChallengeAvatar = styled(Avatar)`
  color: ${primary};
  background: transparent;
  
  svg {
    font-size: 2.5rem;
  }
`;
