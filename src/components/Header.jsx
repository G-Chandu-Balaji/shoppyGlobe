import React from "react";
import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span>Logo</span>
        <h3>ShofyGlobe</h3>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Enter product name..." />
        <span>icon</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Categories</li>
          <li>About Us</li>
          <li>
            <div className="container">
              <span>Cart</span>
              <span>Count</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
