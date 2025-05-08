import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product_Detail.css";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="product-detail-page">
      <div className="left-section">
        <div className="main-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="image-gallery">
          {product.images?.slice(0, 4).map((img, i) => (
            <img key={i} src={img} alt={`thumb-${i}`} />
          ))}
        </div>
      </div>
      <div className="middle-section">
        <h1 className="title">{product.title}</h1>
        <p className="brand">
          Brand: <strong>{product.brand}</strong>
        </p>
        <p className="rating">Rating: ⭐ {product.rating} / 5</p>
        <p className="description">{product.description}</p>
        <div className="stock">In stock: {product.stock}</div>
        <div className="category">Category: {product.category}</div>
      </div>
      <div className="right-section">
        <p className="price">${product.price}</p>
        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart">Add to Cart</button>
        <p className="secure-transaction">Secure transaction</p>
      </div>

      <div className="review-section">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>
            <strong>Jane Doe</strong> - ⭐⭐⭐⭐⭐
          </p>
          <p>Excellent product, highly recommend it!</p>
        </div>
        <div className="review">
          <p>
            <strong>John Smith</strong> - ⭐⭐⭐⭐
          </p>
          <p>Works as expected, good value for money.</p>
        </div>
      </div>
    </div>
  );
}
