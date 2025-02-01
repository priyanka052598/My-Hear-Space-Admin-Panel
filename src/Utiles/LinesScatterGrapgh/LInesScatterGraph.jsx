import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LinesScatterGraph = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", 
      "June", "July", "Aug", "Sept", "Oct", 
      "Nov", "Dec"
    ], // X-axis labels (Months)
    datasets: [
      {
        type: "line", // Line graph
        label: "Trend of Funds Credited",
        data: [5000, 7000, 8000, 6500, 7200, 8500, 9100, 7500, 8300, 8800, 9400, 10000], // Y-axis values
        borderColor: "#000000",
        borderWidth: 2,
        fill: true, // Enable fill under the line
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background under the line
        tension: 0, // Adds slight curve to the line
      },
      {
        type: "scatter", // Scatter plot
        label: "Actual Funds Credited",
        data: [
          { x: "Jan", y: 5000 },
          { x: "Feb", y: 7000 },
          { x: "Mar", y: 8000 },
          { x: "Apr", y: 6500 },
          { x: "May", y: 7200 },
          { x: "June", y: 8500 },
          { x: "July", y: 9100 },
          { x: "Aug", y: 7500 },
          { x: "Sept", y: 8300 },
          { x: "Oct", y: 8800 },
          { x: "Nov", y: 9400 },
          { x: "Dec", y: 10000 },
        ],
        backgroundColor: "#000000",
        pointRadius: 4, // Adjusted point size for scatter
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        mode: "index",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Funds Credited",
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value / 1000}k`; // Format the Y-axis values to "k"
          },
        },
      },
    },
    elements: {
      line: {
        shadowOffsetX: 3, // Adds shadow effect
        shadowOffsetY: 3,
        shadowBlur: 4,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LinesScatterGraph;
