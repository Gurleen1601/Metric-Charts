import React from 'react'
import ReactApexChart from "react-apexcharts";

export const DailyActiveUsers = () => {
  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
    const series = [{
      name: 'Metric1',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric2',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric3',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric4',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric5',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric6',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric7',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric8',
              data: generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric9',
              data: generateData(18, {
                min: 0,
                max: 90
              })
    }];
    const options = {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          radius: 5,
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: 'HeatMap Chart (Single color)'
      },
    }
    
  return (
    <div><h1>  Daily Active Users</h1>
        1. <ReactApexChart 
          options={options}
          series={series} 
          type="heatmap" height={350}/>
    </div>
   
  )
}
