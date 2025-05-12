import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart-container">
      <div className="cart-icon">
        <FaShoppingCart />
      </div>
      <h2>Your cart is empty!</h2>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <button onClick={() => navigate("/products")}>Explore Products</button>
    </div>
  );
};

export default EmptyCart;
