import React from 'react';
import { Container, FlexColumn } from '../../components/Flex';
import { Card } from '../../components/Card/Card';
import {
  CardDivider, CardHeader, CardInfo, CardTitle,
} from '../../components/Card/styles';
import { CardAvatar, CardBackButton } from '../../components/Card';
import { Flex } from '../../components/Flex/Flex';
import CompletionBar from '../../components/CompletionBar';
import AchievementsLine from '../../components/AchievementsLine';
import QRPaymentPanel from '../../components/QRPaymentPanel';

const line = [
  { price: 'R$30,00', description: 'Carta de agradecimento' },
  { price: 'R$150,00', description: 'Grip Crossfit Barigui' },
  { price: 'R$487,00', description: 'Sua Doação Total', actual: true },
  { price: 'R$500,00', description: 'Moletom Crossfit Barigui' },
  { price: 'R$1000,00', description: 'Conversão de plano de horário light para horário livre' },
];

const InstitutionDetailPage = () => (
  <>
    <Container>
      <Card autoHeight>
        <CardHeader>
          <Flex alignCenter justifyBetween column>
            <CardBackButton />
            <CardAvatar>CrossFit Barigui</CardAvatar>
            <CardTitle black>
              CrossFit Barigui
            </CardTitle>
          </Flex>
        </CardHeader>
        <CardDivider />
        <CardInfo>
          <Flex fullWidth column>
            <FlexColumn all="100%">
              A crossfit barigui é uma box de crossfit localizada em curitiba.
              Atualmente temos mais de 100 alunos ativos (...)
              Nossos valores são: transparência,
              Nos ajude a superar as dificuldades durante o COVID!
            </FlexColumn>
          </Flex>
        </CardInfo>
        <CardDivider />
        <CardInfo>
          <Flex fullWidth justifyBetween>
            <FlexColumn all="100%">
              <CompletionBar title="A Crossfit Barigui arrecadou R$7.233 de R$10.000 até agora!" value={(7233 / 10000) * 100} />
            </FlexColumn>
          </Flex>
        </CardInfo>
        <CardDivider />
        <Flex justifyBetween fullWidth className="section mt-4">
          <FlexColumn fullWidth sm="100%" all="50%">
            <AchievementsLine line={line} />
          </FlexColumn>
          <FlexColumn fullWidth sm="100%" all="50%">
            <QRPaymentPanel />
          </FlexColumn>
        </Flex>
      </Card>
    </Container>
  </>
);

export default InstitutionDetailPage;
