import React from 'react'
import ReactApexChart from "react-apexcharts";
export const ChurnRate = () => {
    const series = [
        {
          name: "MRR",
          data: [
            5000,
            7500,
            3000,
            4000,
            5010,
            6012,
            7015,
            8019,
            9024,
          ],
        },
        {
          name: "ARR",
          data: [4750, 14700, 2880,  3800,9820, 5772, 6664, 15717, 8663],
        },
        // {
        //   name: "Churn Rate",
        //   data: [5, 2, 4, 5, 2, 4, 5, 2,],
        // },
      ];
      const options = {
        dataLabels: {
          enabled: false,
        },
        grid:{
          xaxis:{
            lines:{
                show:false
            }
          }
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/22/20",
            "2/1/20",
            "2/15/20",
            "3/1/20",
            "3/15/20",
            "4/1/20",
            "4/15/20",
            "5/1/20",
            "5/7/20",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
      };
  return (
    
    <div><h1>Churn Rate</h1>
     <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  )
}
