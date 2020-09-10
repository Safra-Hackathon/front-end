import React from 'react';
import Modal from '../../../components/Modal';
import {
  CardSubTitle, CardTitle,
} from '../../../components/Card';
import { Flex } from '../../../components/Flex/Flex';
import FundsTable from '../../../components/FundsTable';

const rows = [
  {
    name: 'Fundo A', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,30%', retrive: 'D0',
  },
  {
    name: 'Fundo B', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,90%', retrive: 'D+15',
  },
  {
    name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31',
  },
];

const FundsModal = ({ handleClose, isModalOpen }) => (
  <Modal handleClose={handleClose} open={isModalOpen} title="Fundos Disponíveis para aplicação" text="*Data de Referencia 10/09/2020" size="md">
    <Flex alignCenter column>
      <CardTitle>
        R$5000,00
      </CardTitle>
      <CardSubTitle>Payback - Total</CardSubTitle>
      <FundsTable rows={rows} />
    </Flex>
  </Modal>
);

export default FundsModal;
