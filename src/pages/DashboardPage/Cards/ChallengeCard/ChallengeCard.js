import React from 'react';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import {
  Paper,
  Table, TableBody, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import { Card } from '../../../../components/Card/Card';
import {
  CardDivider, CardTitle,
} from '../../../../components/Card';
import { Flex } from '../../../../components/Flex/Flex';
import { primary, primaryLight } from '../../../../styles/colors';
import LastTransactionsTable from '../../../../components/LastTransactionsTable';
import ChallengesList from '../../../../components/ChallengesList';

const ChallengeCard = () => (
  <Card autoHeight color={primary}>
    <CardTitle flex>
      Desafios
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
