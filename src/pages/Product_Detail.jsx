import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Product_Detail.css";
import LoadingSpinner from "../components/LoadingSpinner";
import QuantityInput from "../components/QuantityButton";
import StarRating from "../components/StarRating";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [newprice, setNewPrice] = useState(1);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (items.length > 0) {
      const item = items.filter((ele) => ele.id == id)[0];
      if (item) {
        setQuantity(item.quantity);
        setProduct(item);
        setNewPrice(item.Newprice);
        setLoading(false);
      }
    } else {
      async function fetchProduct() {
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await res.json();
          setProduct(data);
          setQuantity(data.minimumOrderQuantity);
          setNewPrice(data.price);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      fetchProduct();
    }
  }, [id, items]);

  function handleImage(img) {
    setImage(img);
  }

  function handleaddItem() {
    const item = {
      ...product,
      Newprice: (newprice * quantity).toFixed(2),
      quantity: quantity,
    };
    dispatch(addItem(item));
    navigate("/cart");
  }

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="product-detail-page">
      <div className="left-section">
        <div className="image-gallery">
          {product.images?.slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => handleImage(img)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={image ? image : product.thumbnail} alt={product.title} />
        </div>
      </div>
      <div className="middle-section">
        <div className="head">
          <h3 className="title">{product.title}</h3>
          <p>{product.description}</p>
          <div className="rating">
            {product.rating}
            <StarRating rating={product.rating} />{" "}
          </div>
        </div>
        <div className="middle">
          <div className="limited-deal">Limited Deal</div>
          <div className="price-section">
            <span className="discount-percentage">
              - {""}
              {product.discountPercentage}%
            </span>
            <span className="discounted-price">
              <span className="price-symbol">₹</span>
              {product.price}
            </span>
          </div>
          <div className="price-section-2">
            M.R.P :
            <span className="original-price">
              <span className="price-symbol">₹</span>
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
          </div>
        </div>
        <div className="foot">
          <p>Category</p>
          <p>{product.category}</p>
          <p>Brand</p>
          <p>{product.brand}</p>

          <p>Product Dimensions</p>
          <p>{`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}</p>
          <p>weight</p>
          <p>{product.weight}gms</p>
          <p>Warranty</p>
          <p>{product.warrantyInformation}</p>
        </div>
      </div>
      <div className="right-section">
        <p className="price-section1">
          <span className="price-symbol">₹</span>

          <span className="price">{(newprice * quantity).toFixed(2)}</span>
        </p>
        <p>{product.shippingInformation}</p>
        {product.stock > 0 ? (
          <p style={{ color: "green" }}>In Stock</p>
        ) : (
          <p style={{ color: "red" }}>Out Of Stock</p>
        )}
        <p>Mini. Order Quantity: {product.minimumOrderQuantity}</p>
        <div>
          <QuantityInput
            min={product.minimumOrderQuantity}
            max={product.stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>

        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart" onClick={() => handleaddItem()}>
          Add to Cart
        </button>
        <p className="secure-transaction">Secure transaction</p>
      </div>

      <div className="review-section">
        <h3>Customer Reviews</h3>
        <div className="reviews">
          {product.reviews.map((ele, index) => {
            return (
              <div className="review" key={index}>
                <div className="user-name">
                  <FaRegUserCircle />
                  <p>{ele.reviewerName}</p>
                  <p>{ele.date.slice(0, 10)}</p>
                </div>
                <div className="user-review">
                  <p>{ele.rating}</p>
                  <StarRating rating={ele.rating} />
                </div>
                <div className="text-review">
                  <p>{ele.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
