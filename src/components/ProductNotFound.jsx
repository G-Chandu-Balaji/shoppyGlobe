import React from "react";
import "./ProductNotFound.css";

const ProductNotFound = ({
  message = "No products found matching your search.",
}) => (
  <div className="product-not-found">
    <div className="product-not-found-title">
      <img src="/notFound.png" width={50} height={50} alt="" />
      <h2>{message}</h2>
    </div>

    <p>Try adjusting your search criteria.</p>
  </div>
);

export default ProductNotFound;
