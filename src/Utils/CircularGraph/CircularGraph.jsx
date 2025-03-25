import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  

const CircularGraph = ({ listenerDetails }) => {
   let dataValues, labels;

   if (
     listenerDetails?.online !== undefined ||
     listenerDetails?.offline !== undefined
   ) {
     // Listener Details
     const { inSession, offline, online } = listenerDetails || {};
     dataValues = [inSession , offline, online];
     labels = ["In Session", "Offline", "Online"];
   } else {
     // Session Comparison
     const { chat, phoneCall, videoCall } = listenerDetails || {};
     dataValues = [phoneCall, videoCall, chat];
     labels = ["Phone Call", "Video Call", "Chat"];
   }


  const data = {
    datasets: [
      {
        label: "My Dataset",
        data: dataValues,
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
