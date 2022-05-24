import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({data}:{data:[]}) => {
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);
    
    let alcohol =[];
    let malicAcid =[];
    
    useEffect(()=>{
        
        data.map(d=>{
            alcohol.push(d.Alcohol)
            malicAcid.push(d.MalicAcid)
          });
          setX(malicAcid);
          setY(alcohol);
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
            symbolSize: 5,
            data: y,
            type: 'bar',
            smooth: true,
          },
          
        ],
        title: {
            text: 'Alcohol on horizontal axis and average of Malic Acid on vertical axis',
            subtext: 'Data set link',
            sublink: 'https://archive.ics.uci.edu/ml/datasets/wine',
            left: 'center'
          }, 
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
      };
    return (
        <div className='chart'>
            <ReactECharts option={options} />
        </div>
    );
};

export default BarChart;