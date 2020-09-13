import React from 'react';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { Card } from '../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../components/Card';
import { Flex } from '../../../../components/Flex/Flex';
import { primary } from '../../../../styles/colors';
import ChallengesList from '../../../../components/ChallengesList';

const ChallengeCard = () => (
  <Card autoHeight color={primary}>
    <CardTitle flex>
      Conquistas
      {/* <IconInfo> */}
      <EqualizerOutlinedIcon />
      {/* </IconInfo> */}
    </CardTitle>
    <CardDivider />
    <Flex fullWidth alignBaseline>
      <ChallengesList />
    </Flex>
  </Card>
);

export default ChallengeCard;
