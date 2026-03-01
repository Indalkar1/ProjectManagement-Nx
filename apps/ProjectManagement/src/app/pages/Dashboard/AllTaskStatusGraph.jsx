import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AllTaskStatusGraph = () => {
  const completed = 25;
  const pending = 10;
  const todo = 15;

  const options = {
    chart: {
      type: "bar",
      height: 160, 
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Tasks"],
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Completed",
        data: [completed],
        color: "#4CAF50",
      },
      {
        name: "Pending",
        data: [pending],
        color: "#FFC107",
      },
      {
        name: "To Do",
        data: [todo],
        color: "#2196F3",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="rounded-lg p-2 border border-black">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AllTaskStatusGraph;