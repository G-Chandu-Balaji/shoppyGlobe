import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import "./ProductList.css";

import ProductItem from "./ProductItem";
import { useOutletContext } from "react-router";

export default function ProductList({
  url = "https://dummyjson.com/products?limit=0",
}) {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(url);
  const { searchQuery } = useOutletContext();
  // if (searchQuery) {
  //   // url = `https://dummyjson.com/products/search?q=${searchQuery}`;
  // }

  useEffect(() => {
    const filteredProducts = searchQuery
      ? data.filter(
          (item) =>
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;
    setProducts(filteredProducts);
  }, [searchQuery, data]);

  console.log(products);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
}
