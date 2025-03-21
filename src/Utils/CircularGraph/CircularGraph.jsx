import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  

const CircularGraph = () => {
  const data = {
 
    datasets: [
      {
        label: "My Dataset",
        data: [300, 80, 30],
        backgroundColor: ["#000000", "#808080", "#D9D9D9"],
        borderWidth: 6, // Increases the gap between data segments

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default CircularGraph;
