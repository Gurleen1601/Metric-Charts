import React from "react";
import ReactApexChart from "react-apexcharts";
export const GrossMargin = () => {
    const series=[76];
    const options={
        chart:{
            offsetY:-10
            },
            plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                }
            }
        },
        fill: {
            type: 'gradient',
            opacity: 1.5,
            gradient: {
                shade: 'dark',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 1,
                 opacityTo: 2,
                stops: [0, 50, 65, 91]
            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Gross Margin'],
    }
  return (
    <div> <h1>Gross Margin</h1>
         <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={600}
        width={800}
      />
    </div>
  )
}
