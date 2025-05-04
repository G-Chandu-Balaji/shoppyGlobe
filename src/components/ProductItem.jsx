import React from "react";
import "./ProductItem.css";

export default function ProductItem({ item }) {
  const price = (item.price * 84).toFixed(2);
  const orignalPrice = ((item.discountPercentage + 100) * price) / 100;
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={`${item.thumbnail}`} alt="thumnail" />
      </div>
      <div>
        <p>{item.title}</p>
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
    </div>
  );
}
