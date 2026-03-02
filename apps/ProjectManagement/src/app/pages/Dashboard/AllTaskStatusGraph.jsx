import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useProjectContext } from "../../context/ProjectContextProvider";

const AllTaskStatusGraph = () => {
  const completed = 25;
  const inProgress = 15;
  const todo = 10;
  const onHold = 5;
  // calculate total so we can display it in the chart title
  const total = completed + inProgress + todo + onHold;

  const { theme } = useProjectContext();

  const options = {
    chart: {
      type: "bar",
      height: 120,
      spacing: [10, 10, 10, 10],
      backgroundColor: theme === "dark" ? "#0B1220" : "#F8FAFC",
    },

    title: {
      // prepend the total number so it appears before the static label
      text: `Total Tasks ${total} `,
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight: "600",
        color: theme === "dark" ? "#F8FAFC" : "#0B1220",
      },
    },

    // ✅ IMPORTANT — keep one category
    xAxis: {
      categories: [""],
      lineWidth: 0,
      tickLength: 0,
      labels: { enabled: false },
    },

    yAxis: {
      visible: false,
      max: completed + inProgress + todo + onHold,
    },

    legend: {
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
      itemStyle: {
        color: theme === "dark" ? "#F8FAFC" : "#0B1220",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
        borderWidth: 0,
        pointWidth: 10, // thickness
        grouping: false, // ✅ KEY FIX
      },
    },

    series: [
      {
        name: "Completed",
        data: [completed],
        color: "#2E7D32",
      },
      {
        name: "In Progress",
        data: [inProgress],
        color: "#1976D2",
      },
      {
        name: "To Do",
        data: [todo],
        color: "#F9A825",
      },
      {
        name: "On Hold",
        data: [onHold],
        color: "#616161",
      },
    ],

    credits: { enabled: false },
  };

  return (   
    <div className="rounded-lg p-5 card">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AllTaskStatusGraph;