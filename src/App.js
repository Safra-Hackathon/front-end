import React from 'react';
import './App.css';
import Layout from './containers/Layout';
import Header from './containers/Header';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Layout />
    </div>
  );
}

export default App;
