import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "./Cart.css";

export default function Cart() {
  const items = useSelector((store) => store.cart.items);

  const subtotal = (
    items.reduce((sum, curr) => (sum = sum + curr.price * curr.quantity), 0) *
    84
  ).toFixed(2);

  return (
    <div className="cart-layout">
      <div className="cart-item-list-container">
        <div className="cart-item-list">
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div>
          Subtotal{""} ({items.length}items) :{subtotal}{" "}
        </div>
      </div>
      <div className="subtotal-container">
        <p>
          Subtotal{""} ({items.length}items) :{subtotal}{" "}
        </p>
        <button>Proceed to buy</button>
      </div>
    </div>
  );
}
