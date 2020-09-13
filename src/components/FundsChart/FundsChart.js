import { Radar } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';
import { Flex } from '../Flex/Flex';

const FundsChart = ({ funds }) => {
  const [dataset, setDataset] = useState([]);
  const { render, isMobile } = useChartResponsiveUtils();

  useEffect(() => {
    if (funds) {
      setDataset([{
        backgroundColor: 'rgb(53,69,130, 0.8)',
        borderColor: 'rgb(53,69,130, 0.8)',
        data: funds.map((f) => f.percentage),
      }]);
    }
  }, [funds]);

  if (!render) {
    return <Loading />;
  }

  if (funds.length < 3) {
    return <Typography variant="h6">Adicione mais investimentos para visualizar o gráfico de investimentos!</Typography>;
  }

  return (
    <Flex fullWidth>
      <Radar
        redraw
        height={isMobile ? 300 : 100}
        legend={{ display: false }}
        data={{ datasets: dataset, labels: funds.map((f) => f.label) }}
        options={{
          scale: {
            ticks: {
              min: 0,
            },
          },
        }}
      />
    </Flex>
  );
};

export default FundsChart;
