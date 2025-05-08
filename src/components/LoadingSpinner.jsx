import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="bag-icon">🛍️</div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
