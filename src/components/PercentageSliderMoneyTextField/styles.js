import styled from 'styled-components';
import { muiColors, secondary } from '../../styles/colors';

export const MinInvestmentLabel = styled.span`
    font-size: 0.75rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: ${(props) => (props.ltMin ? 600 : 400)};
    line-height: 1.66;
    letter-spacing: 0.03333em;
    color: ${(props) => (props.ltMin ? muiColors.red : secondary)};
`;
