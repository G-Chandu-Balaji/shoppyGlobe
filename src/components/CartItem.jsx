import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import "./CartItem.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item" key={item.id}>
      <img src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>
          <span className="price">${item.price.toFixed(2)}</span>
          {item.discountPercentage && (
            <span className="discount"> ({item.discountPercentage}% off)</span>
          )}
        </p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
