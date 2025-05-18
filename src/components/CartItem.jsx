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
        <div className="price-section-2">
          M.R.P :
          <span className="original-price">
            <span className="price-symbol">₹</span>
            {(
              (item.price / (1 - item.discountPercentage / 100)) *
              item.quantity
            ).toFixed(2)}
          </span>
        </div>
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
          Delete
        </button>
      </div>
    </div>
  );
}
