import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';
import ScatterPlot from './components/ScatterPlot/ScatterPlot';

function App() {
  const [data, setData]= useState([]);


   useEffect(()=>{
    fetch('wine.json')
    .then(res=>res.json())
    .then(data=>{
      setData(data);
    })
  },[])
 

  return (
    <div className='App'>
      
        <ScatterPlot 
          data={data}
        ></ScatterPlot>
        <BarChart
          data={data}
        ></BarChart>
    </div>
  );
}

export default App;
