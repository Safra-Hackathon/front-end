import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import { primary } from '../../styles/colors';

export const StyledLinearProgress = styled(LinearProgress)`
    width: 100%;
    height: 15px;
    border-radius: 10px;
    background: ${primary.fade(0.5)};
    $:after {
        opacity: 0.6;
    }
    div {
        border-radius: 10px;
    }
`;
