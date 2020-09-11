import List from '@material-ui/core/List';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ChallengeItem from '../ChallengeItem';

const FundsList = () => (
  <List style={{ width: '100%', background: 'white', borderRadius: '20px' }}>
    {[10, 11, 22, 33].map((value, key, array) => (
      <>
        <ChallengeItem value={value} />
        {key + 1 < array.length && <Divider />}
      </>
    ))}
  </List>
);

export default FundsList;
