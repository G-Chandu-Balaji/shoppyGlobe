import React from "react";
import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="name-logo">
            <img src="/headerlogo.png" alt="logo" width={30} height={30} />
            <h4>ShoppyGlobe</h4>
          </div>
          <p>Your one-stop shop for everything trendy and essential</p>
          <Link to="https://github.com/G-Chandu-Balaji/shoppyGlobe">
            <button>GitHub Link</button>
          </Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@shoppyglobe.com</p>
          <p>Phone: 08500625896</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShoppyGlobe. All rights reserved.</p>
      </div>
    </footer>
  );
}
