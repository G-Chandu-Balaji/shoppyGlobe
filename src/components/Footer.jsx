import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ShoppyGlobe</h4>
          <p>
            Your favorite place to shop online for the best deals and products.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@shoppyglobe.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShoppyGlobe. All rights reserved.</p>
      </div>
    </footer>
  );
}
