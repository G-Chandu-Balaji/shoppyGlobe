import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import "./Cart.css";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc + ((item.discountPercentage || 0) / 100) * item.price * item.quantity,
    0
  );
  const finalAmount = totalAmount - totalDiscount;

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
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Subtotal ({cartItems.length} items):</h2>
            <p className="total">₹{totalAmount.toFixed(2)}</p>
            <p className="discount-amount">
              Discount: -₹{totalDiscount.toFixed(2)}
            </p>
            <p className="final-amount">
              Final Total: ₹{finalAmount.toFixed(2)}
            </p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
