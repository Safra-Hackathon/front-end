import styled from 'styled-components';
import { TimelineConnector, TimelineContent, TimelineItem } from '@material-ui/lab';
import { darkText, primary } from '../../styles/colors';

export const Connector = styled(TimelineConnector)`
    ${(props) => (props.accomplished ? `background-color: ${primary}` : '')}
`;

export const Content = styled(TimelineContent)`
    color: ${(props) => (props.accomplished ? primary : darkText)};
    ${(props) => (props.actual ? 'font-weight: bold' : '')}
`;

export const Item = styled(TimelineItem)`
    width: 100%;
`;
