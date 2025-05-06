import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";

import { addItem } from "../utils/cartSlice";
import { Link } from "react-router";

export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  const price = (item.price * 84).toFixed(2);
  const orignalPrice = ((item.discountPercentage + 100) * price) / 100;

  function handleadditem() {
    dispatch(addItem(item));
    console.log("added to cart");
  }
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={`${item.thumbnail}`} alt="thumnail" />
      </div>
      <div>
        <Link to={`product_detail/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <p>{item.rating}</p>
        <div className="price">
          <span className="discount">
            <sup>&#8377;</sup> {price}
            <span className="mrp">
              M.R.P: <span className="orgPrice">{orignalPrice.toFixed(2)}</span>
            </span>
          </span>
          <span className="percentage">({item.discountPercentage}% off)</span>
        </div>
      </div>
      <button onClick={handleadditem}>Add to Cart</button>
    </div>
  );
}
