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

  function handleDecrease() {
    dispatch(decreaseQuantity(item.id));
  }

  function handleIncrease() {
    dispatch(increaseQuantity(item.id));
  }
  function handledelete() {
    dispatch(removeItem(item.id));
  }
  return (
    <div className="cart-item-container">
      <img src={`${item.images[0]}`} alt="" width={300} height={300} />
      <div className="detailes-price">
        <div className="title-name-car">{item.title}</div>
        <div className="item-price-cart">
          <p>{item.discountPercentage}%</p>
          <p>{item.price}</p>
        </div>
        <div className="item-details-cart">
          <p>{item.availabilityStatus}</p>
        </div>

        <div className="quantity-containr">
          <button onClick={handleDecrease}>-</button>
          <span>quantity: {item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handledelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
