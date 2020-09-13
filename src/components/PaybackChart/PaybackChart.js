import React from 'react';
import { Line } from 'react-chartjs-2';
import { ptBR } from 'date-fns/locale';
import addMonths from 'date-fns/addMonths';
import { Flex } from '../Flex/Flex';
import 'chartjs-adapter-date-fns';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';

const generateDataset = (n) => {
  const data = [];
  let date = new Date();
  for (let i = 0; i < n; i++) {
    data.push({ x: date, y: Math.random() * 1000 + i * 500 * Math.random() });
    date = addMonths(date, 1);
  }
  return data;
};

const PaybackChart = ({ loading }) => {
  const { render, isMobile } = useChartResponsiveUtils();
  const getDataset = () => [
    {
      // fill: false,
      backgroundColor: 'rgb(218,191,113, 0.4)',
      borderColor: 'rgb(218,191,113)',
      borderWidth: 2,
      label: 'Historico',
      data: generateDataset(10),
    },
    {
      fill: false,
      backgroundColor: 'rgb(255,0,0)',
      borderColor: 'rgb(255,0,0)',
      borderWidth: 2,
      borderDash: [5],
      label: 'Planejado',
      data: generateDataset(10),
    },
    {
      // fill: false,
      backgroundColor: 'rgb(37,46,91, 0.8)',
      borderColor: 'rgb(37,46,91)',
      borderWidth: 2,
      label: 'Projecao',
      data: generateDataset(10),
    },
  ];

  if (!render || loading) {
    return <Loading />;
  }

  return (
    <Flex fullWidth>
      <Line
        redraw
        height={isMobile ? 300 : 100}
        data={{ datasets: getDataset() }}
        options={{
          scales: {
            xAxes: [{
              type: 'time',
              adapters: {
                date: {
                  locale: ptBR,
                },
              },
              time: {
                round: true,
                unit: 'month',
                tooltipFormat: 'dd/MM/yyyy',
                displayFormats: {
                  // hour: 'hhA',
                },
                bounds: 'auto',
                minUnit: 'day',
              },
            }],
            yAxes: [{
              ticks: {
                stepSize: 1000,
              },
            }],
          },
        }}
      />
    </Flex>
  );
};

export default PaybackChart;
