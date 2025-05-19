import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./NotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <img
        src="/error-404.png"
        alt="404 Illustration"
        className="illustration"
      />

      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <button onClick={() => navigate("/")}>
        {" "}
        <FaHome /> Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
