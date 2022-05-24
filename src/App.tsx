import React from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';
import ScatterPlot from './components/ScatterPlot/ScatterPlot';

function App() {
  return (
    <div className='App'>
        <ScatterPlot></ScatterPlot>
        <BarChart></BarChart>
    </div>
  );
}

export default App;
