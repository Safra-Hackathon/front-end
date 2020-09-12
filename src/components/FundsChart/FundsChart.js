import { Radar } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';
import { Flex } from '../Flex/Flex';

const FundsChart = ({ funds }) => {
  const [dataset, setDataset] = useState([]);
  const { render, isMobile } = useChartResponsiveUtils();

  useEffect(() => {
    setDataset([{
      backgroundColor: 'rgba(255,0,0,0.4)',
      borderColor: 'rgba(255,0,0,0.4)',
      data: funds.map((f) => f.percentage),
    }]);
  }, [funds]);

  if (!render) {
    return <Loading />;
  }

  return (
    <Flex fullWidth>
      <Radar
        redraw
        height={isMobile ? '300px' : '100px'}
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
