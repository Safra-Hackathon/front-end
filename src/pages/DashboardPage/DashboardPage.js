import React from 'react';
import DashboardPanel from './DashboardPanel';
import DashboardProvider from './DashboardProvider';

const DashboardPage = () => (
  <DashboardProvider>
    <DashboardPanel />
  </DashboardProvider>
);

export default DashboardPage;
