import React from 'react'
import ReactApexChart from "react-apexcharts";
export const CustomerRetentionRate = () => {
    const series = [{
        name: 'George Washington',
        data: [
          {
            x: 'President',
            y: [
              new Date(1789, 3, 30).getTime(),
              new Date(1797, 2, 4).getTime()
            ]
          },
        ]
    },
    {
        name: 'John Adams',
        data: [
          {
            x: 'President',
            y: [
              new Date(1797, 2, 4).getTime(),
              new Date(1801, 2, 4).getTime()
            ]
          },
          {
            x: 'Vice President',
            y: [
              new Date(1789, 3, 21).getTime(),
              new Date(1797, 2, 4).getTime()
            ]
          }
        ]
      },
      {
        name: 'Thomas Jefferson',
        data: [
          {
            x: 'President',
            y: [
              new Date(1801, 2, 4).getTime(),
              new Date(1809, 2, 4).getTime()
            ]
          },
          {
            x: 'Vice President',
            y: [
              new Date(1797, 2, 4).getTime(),
              new Date(1801, 2, 4).getTime()
            ]
          },
          {
            x: 'Secretary of State',
            y: [
              new Date(1790, 2, 22).getTime(),
              new Date(1793, 11, 31).getTime()
            ]
          }
        ]
      },
      {
        name: 'Aaron Burr',
        data: [
          {
            x: 'Vice President',
            y: [
              new Date(1801, 2, 4).getTime(),
              new Date(1805, 2, 4).getTime()
            ]
          }
        ]
      },
      {
        name: 'George Clinton',
        data: [
          {
            x: 'Vice President',
            y: [
              new Date(1805, 2, 4).getTime(),
              new Date(1812, 3, 20).getTime()
            ]
          }
        ]
      },
      {
        name: 'John Jay',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1789, 8, 25).getTime(),
              new Date(1790, 2, 22).getTime()
            ]
          }
        ]
      },
      // Edmund Randolph
      {
        name: 'Edmund Randolph',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1794, 0, 2).getTime(),
              new Date(1795, 7, 20).getTime()
            ]
          }
        ]
      },
      // Timothy Pickering
      {
        name: 'Timothy Pickering',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1795, 7, 20).getTime(),
              new Date(1800, 4, 12).getTime()
            ]
          }
        ]
      },
      // Charles Lee
      {
        name: 'Charles Lee',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1800, 4, 13).getTime(),
              new Date(1800, 5, 5).getTime()
            ]
          }
        ]
      },
      // John Marshall
      {
        name: 'John Marshall',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1800, 5, 13).getTime(),
              new Date(1801, 2, 4).getTime()
            ]
          }
        ]
      },
      // Levi Lincoln
      {
        name: 'Levi Lincoln',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1801, 2, 5).getTime(),
              new Date(1801, 4, 1).getTime()
            ]
          }
        ]
      },
      {
        name: 'James Madison',
        data: [
          {
            x: 'Secretary of State',
            y: [
              new Date(1801, 4, 2).getTime(),
              new Date(1809, 2, 3).getTime()
            ]
          }
        ]
      },
];
const options = {
    chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
          rangeBarGroupRows: true
        }
      },
      colors: [
        "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
        "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
        "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
      ],
      fill: {
        type: 'solid'
      },
      xaxis: {
        type: 'datetime'
      },
      legend: {
        position: 'right'
      },
      tooltip: {
        custom: function(opts) {
          const fromYear = new Date(opts.y1).getFullYear()
          const toYear = new Date(opts.y2).getFullYear()
          const values = opts.ctx.rangeBar.getTooltipValues(opts)
      
          return (
            ''
          )
        }
      }
}
  return (
    <div><h1>Customer Retention Rate</h1>
    <ReactApexChart options={options} series={series} type="rangeBar" height={350} />
    </div>
  )
}
