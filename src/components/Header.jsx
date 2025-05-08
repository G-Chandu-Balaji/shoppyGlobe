import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header({ setSearchQuery }) {
  const count = useSelector((store) => store.cart.items.length);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    setSearchQuery(searchInput);
    navigate("/products");
  };

  return (
    <div className="header">
      <div className="logo">
        <span>
          <img src="shopping-bag.png" alt="logo" width={40} height={40} />
        </span>
        <h3>ShoppyGlobe</h3>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src="search.png" alt="search-icon" width={20} height={20} />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <div className="cart-container">
              <span className="cart-icon">
                <Link to="/cart">
                  <img
                    src="shopping-cart.png"
                    alt="logo"
                    width={30}
                    height={20}
                  />
                </Link>
                {count > 0 && <span className="count">{count}</span>}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
