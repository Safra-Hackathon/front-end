import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Connector, Content, Item } from './styles';

const AchievementsLine = ({ line }) => {
  let accomplished = true;
  return (
    <Timeline style={{ alignItems: 'center' }}>
      {line.map((item) => {
        if (item.actual) accomplished = false;
        return (
          <Item>
            <TimelineOppositeContent>
              {item.price}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={accomplished || item.actual ? 'primary' : 'secondary'} variant={accomplished ? 'default' : 'outlined'} />
              <Connector accomplished={accomplished} />
            </TimelineSeparator>
            <Content accomplished={accomplished} actual={item.actual}>{item.description}</Content>
          </Item>
        );
      })}
    </Timeline>
  );
};

export default AchievementsLine;
