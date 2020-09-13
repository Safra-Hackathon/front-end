import React from 'react';
import { Line } from 'react-chartjs-2';
import { ptBR } from 'date-fns/locale';
import { Flex } from '../Flex/Flex';
import 'chartjs-adapter-date-fns';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';
import { usePaybackContext } from '../../pages/SafraPaybackPage/PaybackProvider/PaybackProvider';
import { toMoney } from '../../utils/string';

const PaybackChart = () => {
  const {
    chartData, chartLoading, paybackLoading, startDate,
    endDate, paybackData,
  } = usePaybackContext();
  const { render, isMobile } = useChartResponsiveUtils();

  const genDataset = (feature) => {
    if (!chartData[feature]) return [];
    return chartData[feature].map((h) => {
      const [k, v] = Object.entries(h)[0];
      const [year, month, day] = k.split('-');
      return ({ x: new Date(year, month, day), y: v });
    });
  };

  const getDataset = () => [
    {
      // fill: false,
      backgroundColor: 'rgb(218,191,113, 0.4)',
      borderColor: 'rgb(218,191,113)',
      borderWidth: 2,
      label: 'Histórico',
      data: genDataset('historico'),
    },
    {
      fill: false,
      backgroundColor: 'rgb(53,177,0)',
      borderColor: 'rgb(81,202,0)',
      borderWidth: 5,
      borderDash: [5],
      label: 'Planejado',
      data: [{ x: startDate, y: paybackData.goal }, { x: endDate, y: paybackData.goal }],
    },
    {
      // fill: false,
      backgroundColor: 'rgb(37,46,91, 0.8)',
      borderColor: 'rgb(37,46,91)',
      borderWidth: 2,
      label: 'Projeção',
      data: genDataset('projetado'),
    },
  ];

  if (!render || chartLoading || paybackLoading || !chartData || !paybackData) {
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
              ticks: {
                min: startDate,
                max: endDate,
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
                stepSize: 500,
                suggestedMax: paybackData.goal * 1.1,
              },
            }],
          },
        }}
      />
    </Flex>
  );
};

export default PaybackChart;
