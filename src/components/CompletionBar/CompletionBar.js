import Typography from '@material-ui/core/Typography';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { Flex } from '../Flex/Flex';
import { StyledLinearProgress } from './styles';

const CompletionBar = ({
  title, subTitle, labelGenerator, value, ...props
}) => (
  <Flex fullWidth alignCenter alignEnd>
    <Flex fullWidth>
      <Typography variant="subtitle2" color="primary">{title}</Typography>
    </Flex>
    <Flex fullWidth>
      <Typography variant="subtitle2" color="secondary">{subTitle}</Typography>
    </Flex>
    <Flex fullWidth fullHeight>
      <StyledLinearProgress variant="determinate" color="primary" value={value} {...props} />
    </Flex>
  </Flex>
);

CompletionBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  labelGenerator: PropTypes.func,
  value: PropTypes.any.isRequired,
};

export default CompletionBar;
