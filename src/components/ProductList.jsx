import React, { useEffect } from "react";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { additems } from "../utils/productlistSlice";

import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data) {
      dispatch(additems(data));
    }
  }, [data]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
}
