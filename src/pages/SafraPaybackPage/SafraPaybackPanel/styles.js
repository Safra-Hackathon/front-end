import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { phablet } from '../../../styles/queries';
import ButtonModalProgress from '../../../components/ButtonModalProgress';

export const SaveButtonStyled = styled(ButtonModalProgress)`
    width: 100%;
    margin-bottom: 20px;
    
    ${phablet} {
        width: auto;
        margin-bottom: auto;
        margin-right: 10px;
   }
`;

export const FundsButtonStyled = styled(Button)`
    width: 100%;
    margin-top: 8px;
    
    ${phablet} {
        width: auto;
        margin-top: auto;
   }
`;
