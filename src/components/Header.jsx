import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./Header.css";
import { useSelector } from "react-redux";

import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function Header({ setSearchQuery }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = useSelector((store) => store.cart.items.length);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Update header style based on the current pathname
    if (location.pathname === "/") {
      setActiveIndex(0);
      setSearchQuery(null);
    } else if (location.pathname === "/products") {
      setActiveIndex(1);
    } else {
      setActiveIndex(null);
    }
  }, [location.pathname]);

  const handleSearch = () => {
    setSearchQuery(searchInput);
    navigate("/products");
    setSearchInput("");
  };

  return (
    <div className="header">
      <div className="logo">
        <span>
          <img src="headerlogo.png" alt="logo" width={40} height={40} />
        </span>
        <h3 className="title">ShoppyGlobe</h3>
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
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <FaBars size={20} />
        </label>
        <label htmlFor="sidebar-active" id="overlay"></label>
        <div className="link-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <MdOutlineClose size={40} color="white" />
          </label>
          <ul>
            <li>
              <Link to="/" className={` ${activeIndex === 0 ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={` ${activeIndex === 1 ? "active" : ""}`}
              >
                Products
              </Link>
            </li>
          </ul>
          <div>
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
          </div>
        </div>
      </nav>
      {/* <div>
        <nav>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-button">
            <FaBars />
          </label>
          <label htmlFor="sidebar-active" id="overlay"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button">
              <MdOutlineClose />
            </label>
            <Link to="/" className={` ${activeIndex === 0 ? "active" : ""}`}>
              Home
            </Link>
            <Link
              to="/products"
              className={` ${activeIndex === 1 ? "active" : ""}`}
            >
              Products
            </Link>
            <div>
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
            </div>
          </div>
        </nav>
      </div> */}
    </div>
  );
}
