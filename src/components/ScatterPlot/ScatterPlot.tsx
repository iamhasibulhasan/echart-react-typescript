import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const ScatterPlot = ({data}:{data:[]}) => {
    
    
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);

    let hue =[];
    let colorInt =[];
    
    useEffect(()=>{
        
        data.map(d=>{
            hue.push(d.Hue)
            colorInt.push(d.ColorInt)
          });
          setX(hue);
          setY(colorInt);
    },[data])
   
    
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis : { 
          type: 'category',
          data: x,
          boundaryGap: [0, '100%']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        

        dataZoom: [
            {
            type: 'inside',
            start: 0,
            end: 10
            },
            {
            start: 0,
            end: 10
            }
        ],
        series: [
          {
            data: y,
            type: 'scatter',
            smooth: true,
          },
        ],
        title: {
            text: 'Color Intensity” on horizontal axis and “Hue” on vertical axis.',
            subtext: 'Data set link',
            sublink: 'https://archive.ics.uci.edu/ml/datasets/wine',
            left: 'center'
          },
        tooltip: {
          trigger: 'axis',
        },
      };
    return (
        <div className="chart">
                <ReactECharts 
                option={options} 
                notMerge={true}
                lazyUpdate={true}
                />
            </div>
    );
};

export default ScatterPlot;