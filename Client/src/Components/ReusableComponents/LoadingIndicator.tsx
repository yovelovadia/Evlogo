import React from "react";

const LoadingIndicator: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="loadingIndicator">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
