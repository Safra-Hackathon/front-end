import React from 'react';
import FundsTables from '../../components/FundsTables';

const rows = [
  {
    name: 'Fundo A', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,30%', retrive: 'D0', recommended: true,
  },
  {
    name: 'Fundo B', category: 'Renda Fixa', rentability: '1,90%', minApplied: 'R$1000,00', adminTax: '0,90%', retrive: 'D+15', recommended: true,
  },
  {
    name: 'Fundo C', category: 'Multimercado', rentability: '0,78%', minApplied: 'R$2500,00', adminTax: '2,5%', retrive: 'D+31', favorite: true,
  },
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

const FundsPage = () => (
  <FundsTables rows={rows} />
);

export default FundsPage;
