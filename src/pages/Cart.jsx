import React from "react";
import { useDispatch, useSelector } from "react-redux";

import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import "./Cart.css";
import { useNavigate } from "react-router";
import { addOrder } from "../utils/cartSlice";

export default function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc + ((item.discountPercentage || 0) / 100) * item.price * item.quantity,
    0
  );
  const finalAmount = totalAmount + totalDiscount;
  function handleCheckOut() {
    cartItems.map((ele) => dispatch(addOrder(ele)));

    navigate("/checkOut");
  }
  return (
    <div className="cart-page">
      <h3>Your Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <div>
          {" "}
          <EmptyCart />{" "}
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            <div>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <div className="cart-subtotal">
              <span>Subtotal ({cartItems.length} items):</span>
              <p>₹{totalAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="cart-summary">
            <div className="cart-summary-subtotal">
              <h2>Subtotal ({cartItems.length} items):</h2>
              <h2 className="total">₹{finalAmount.toFixed(2)}</h2>
            </div>
            <p className="discount-amount">
              Discount: -₹{totalDiscount.toFixed(2)}
            </p>
            <p className="final-amount">
              Final Total: ₹{totalAmount.toFixed(2)}
            </p>
            <button className="checkout-btn" onClick={handleCheckOut}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
