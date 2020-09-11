import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import QRCode from 'qrcode.react';
import { Flex, FlexColumn } from '../Flex/Flex';

const QRPaymentPanel = () => (
  <Flex fullWidth justifyBetween>
    <FlexColumn all="100%">
      <Typography variant="h6" color="primary">Digite um valor e clique em Gerar QR Code</Typography>
    </FlexColumn>
    <Flex fullWidth>
      <FlexColumn all="50%">
        <TextField variant="outlined" label="Valor" color="primary" />
      </FlexColumn>
      <FlexColumn all="50%">
        <Button style={{ height: '54px' }} size="large" variant="contained" color="primary">Gerar QR Code</Button>
      </FlexColumn>
    </Flex>
    <Flex fullHeight fullWidth>
      <FlexColumn all="100%">
        <QRCode value={2} size={256} />
      </FlexColumn>
    </Flex>
  </Flex>
);

export default QRPaymentPanel;
