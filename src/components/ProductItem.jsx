import { Link } from "react-router-dom";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import StarRating from "./StarRating";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const discountedPrice = product.price;
  const discountPercent = product.discountPercentage;
  const originalPrice = (discountedPrice / (1 - discountPercent / 100)).toFixed(
    2
  );

  function handleadditem() {
    dispatch(addItem(product));
  }

  return (
    <div className="product-card">
      <Link
        to={`/products/product_detail/${product.id}`}
        className="product-link"
      >
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <p>{product.title}</p>
        <div className="price-section">
          <span className="discount-percentage">
            - {""}
            {discountPercent}%
          </span>
          <span className="discounted-price">
            <span className="price-symbol">₹</span>
            {discountedPrice}
          </span>
        </div>
        <div className="price-section-2">
          M.R.P :
          <span className="original-price">
            <span className="price-symbol">₹</span>
            {originalPrice}
          </span>
        </div>
        <div className="rating">
          {" "}
          {product.rating.toFixed(1)}{" "}
          <div>
            <StarRating rating={product.rating} />
          </div>
        </div>
      </Link>
      <button className="add-to-cart" onClick={handleadditem}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
