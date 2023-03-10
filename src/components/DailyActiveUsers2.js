import React from 'react'
import ReactApexChart from "react-apexcharts";

export const DailyActiveUsers2 = () => {
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
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateData(20, {
          min: 0,
          max: 90
        })
      }];
      const options = {
        chart: {
            height: 350,
            type: 'heatmap',
          },
          stroke: {
            width: 0
          },
          plotOptions: {
            heatmap: {
              radius: 30,
              enableShades: false,
              colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: '#008FFB'
                  },
                  {
                    from: 51,
                    to: 100,
                    color: '#00E396'
                  },
                ],
              },
          
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#fff']
            }
          },
          xaxis: {
            type: 'category',
          },
          title: {
            text: 'Rounded (Range without Shades)'
          },
      }
  return (
    <div><h1>DailyActiveUsers2</h1>
    2. <ReactApexChart options={options} 
    series={series} 
    type="heatmap" height={350} />
    </div>
  )
}
