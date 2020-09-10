import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ptBR } from 'date-fns/locale';
import addMonths from 'date-fns/addMonths';
import { Flex } from '../Flex/Flex';
import 'chartjs-adapter-date-fns';
import { useMobile } from '../../hooks';
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

const PaybackChart = () => {
  const [render, setRender] = useState(false);
  const isMobile = useMobile();
  const getDataset = () => [
    {
      fill: false,
      backgroundColor: 'rgba(255,0,0,0.4)',
      borderColor: 'rgba(255,0,0,0.4)',
      borderWidth: 2,
      label: 'Historico',
      data: generateDataset(10),
    },
    {
      fill: false,
      backgroundColor: 'rgba(255,255,0,0.4)',
      borderColor: 'rgba(255,255,0,0.4)',
      borderWidth: 2,
      label: 'Planejado',
      data: generateDataset(10),
    },
    {
      fill: false,
      backgroundColor: 'rgba(255,0,255,0.4)',
      borderColor: 'rgba(255,0,255,0.4)',
      borderWidth: 2,
      label: 'Projecao',
      data: generateDataset(10),
    },
  ];

  // Workaround to chart re-render when screen width changes
  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, [isMobile]);

  if (!render) {
    return <Loading />;
  }

  return (
    <Flex fullWidth>
      <Line
        redraw
        height={isMobile ? '200px' : '100px'}
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
