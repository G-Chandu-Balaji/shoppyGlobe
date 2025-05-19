import React, { lazy, Suspense, useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import "./ProductList.css";

import { useOutletContext } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorElement from "../components/ErrorElement";
import ProductNotFound from "../components/ProductNotFound";
const ProductItem = lazy(() => import("../components/ProductItem"));

export default function ProductList() {
  const [notFound, setNotFound] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortChange, SetSortChange] = useState([]);
  const { data, loading, error } = useFetch();
  const { searchQuery } = useOutletContext();

  useEffect(() => {
    const filteredProducts =
      data && searchQuery
        ? data.filter(
            (item) =>
              item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : data || [];
    if (filteredProducts.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setProducts(filteredProducts);
  }, [searchQuery, data]);

  useEffect(() => {
    let sorted = [...products];
    switch (sortChange) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "discount-desc":
        sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      default:
        break;
    }
    setProducts(sorted);
  }, [sortChange]);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div>
        <ErrorElement error={error} />
      </div>
    );

  return (
    <div>
      <div className="sort-container">
        <p>{`${products.length} Products`}</p>

        <label htmlFor="sort" aria-label="Sort products by">
          Sort by:
        </label>
        <select id="sort" onChange={(e) => SetSortChange(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="discount-desc">Discount: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {notFound && searchQuery && <ProductNotFound />}
        <Suspense fallback={<LoadingSpinner />}>
          {products.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
