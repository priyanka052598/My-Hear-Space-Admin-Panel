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
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ScatterController // Register ScatterController
);

function LinesScatterGraph({ monthlyData }) {
console.log("monthlyData", monthlyData);

if (!monthlyData || typeof monthlyData !== "object") {
  console.error("Invalid monthlyData format:", monthlyData);
  return <p>Error: Invalid Data</p>; // Show error message instead of crashing
}

const formattedData = Object.entries(monthlyData || {}).map(
  ([month, value]) => ({
    x: month.slice(0, 3), // Shorten to "Jan", "Feb", etc.
    y: value || 0, // Ensure a default value
  })
);

 const monthsOrder = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];
console.log("formattedData", formattedData);
  const lineGraphData = monthsOrder.map((month) => monthlyData?.[month] ?? 0);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels (Months)
    datasets: [
      {
        type: "line", // Line graph
        label: "Trend of Funds Credited",
        data: lineGraphData, // Y-axis values
        borderColor: "#000000",
        borderWidth: 2,
        fill: false, // Enable fill under the line
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background under the line
        tension: 0, // Adds slight curve to the line
      },
      {
        type: "scatter", // Scatter plot
        label: "Actual Funds Credited",
        data: formattedData,
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
