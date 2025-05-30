import React from "react";
import "./OrderConfirmed.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router";

const OrderConfirmed = () => {
  return (
    <div className="order-confirmed">
      <div className="content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="check-icon"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
        <h1>Order Confirmed</h1>
        <p>
          A confirmation email with details and Invoice has been sent to your
          inbox.
        </p>
        <p>Thank you ! for shopping with us</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmed;
