import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0df", borderRadius: "10px" }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#000000",
          height: "10px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default Progressbar;
