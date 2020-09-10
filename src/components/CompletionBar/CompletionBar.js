import Typography from '@material-ui/core/Typography';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Flex, FlexColumn } from '../Flex/Flex';

const CompletionBar = ({ value, props }) => (
  <Flex alignEnd>
    <FlexColumn style={{}} sm="70%" all="75%">
      <Typography variant="h6" color="primary">Titulo</Typography>
      <Typography variant="subtitle2" color="secondary">Sub</Typography>
      <LinearProgress variant="determinate" color="primary" value={value} {...props} />
    </FlexColumn>
    <FlexColumn sm="30%" all="25%">
      <Typography variant="subtitle2" color="primary">
        {`${value} pontos`}
      </Typography>
    </FlexColumn>
  </Flex>
);

export default CompletionBar;
