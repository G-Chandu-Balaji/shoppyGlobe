import React, { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header({ setSearchQuery }) {
  const count = useSelector((store) => store.cart.items.length);
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  return (
    <div className="header">
      <div className="logo">
        <span>Logo</span>
        <h3>ShofyGlobe</h3>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>icon</button>
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
              <span>
                <Link to="/cart">Cart</Link>
              </span>
              <span>{count}</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
