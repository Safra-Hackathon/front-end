import React from 'react';
import { Line } from 'react-chartjs-2';
import { ptBR } from 'date-fns/locale';
import { addMonths } from 'date-fns';
import { Flex } from '../Flex/Flex';
import 'chartjs-adapter-date-fns';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';
import { usePaybackContext } from '../../pages/SafraPaybackPage/PaybackProvider/PaybackProvider';
import { toMoney } from '../../utils/string';

const generateDataset = (n) => {
  const data = [];
  let date = new Date();
  for (let i = 0; i < n; i++) {
    data.push({ x: date, y: Math.random() * 1000 + i * 500 * Math.random() });
    date = addMonths(date, 1);
  }
  return data;
};

const PaybackChart = () => {
  const {
    chartData, chartLoading, paybackLoading, startDate,
    endDate,
  } = usePaybackContext();
  const { render, isMobile } = useChartResponsiveUtils();
  const getDataset = () => [
    {
      // fill: false,
      backgroundColor: 'rgb(218,191,113, 0.4)',
      borderColor: 'rgb(218,191,113)',
      borderWidth: 2,
      label: 'Historico',
      data: Object.entries(chartData).map((k, v) => ({ x: new Date(k), y: v })),
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

  if (!render || chartLoading || paybackLoading || !chartData) {
    return <Loading />;
  }

  return (
    <Flex fullWidth>
      <Line
        redraw
        height={isMobile ? 300 : 100}
        data={{ datasets: getDataset() }}
        options={{
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += toMoney(tooltipItem.yLabel);
                return label;
              },
            },
          },
          scales: {
            xAxes: [{
              type: 'time',
              adapters: {
                date: {
                  locale: ptBR,
                },
              },
              time: {
                min: startDate,
                max: endDate,
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
