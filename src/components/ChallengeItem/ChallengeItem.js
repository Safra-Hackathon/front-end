import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import CompletionBar from '../CompletionBar';
import { ItemProgress } from './styles';

const ChallengeItem = ({ value, labelId }) => (
  <ListItem key={value} style={{ height: '100px' }}>
    <ListItemAvatar>
      <Avatar>
        <EqualizerOutlinedIcon />
      </Avatar>
    </ListItemAvatar>
    <ItemProgress>
      <CompletionBar value={value} />
    </ItemProgress>
  </ListItem>
);

export default ChallengeItem;
