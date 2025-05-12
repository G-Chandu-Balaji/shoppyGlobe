import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import "./CartItem.css";
import QuantityInput from "./QuantityButton";
import { Link } from "react-router";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  console.log(item);

  return (
    <div className="cart-item" key={item.id}>
      <img src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h4>
          <Link to={`/products/product_detail/${item.id}`}>{item.title}</Link>
        </h4>
        <p>
          <span className="price">₹{item.Newprice}</span>
          {item.discountPercentage && (
            <span className="discount"> ({item.discountPercentage}% off)</span>
          )}
        </p>
        <div className="quantity-controls">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity < item.minimumOrderQuantity}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            disabled={item.quantity > item.stock}
          >
            +
          </button>
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
