import React from "react";
import "./ErrorElement.css";

export default function ErrorElement({ error }) {
  return (
    <div className="error-page">
      <img src="/file.png" alt="page not found" />
      <h2>Page not found</h2>
      <p>{error}</p>
    </div>
  );
}
