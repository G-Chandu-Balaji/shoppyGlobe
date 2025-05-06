import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product_Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log(data);
        setItem(data);
      } catch (err) {
        console.error("error", err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  if (isloading) return <p> Loading....</p>;
  if (!item) return <p>Product not found ....</p>;

  return (
    <div>
      <h4>{item.title}</h4>
      <img src={item.images[0]} alt={item.title} width="200" />
      <p>{item.description}</p>
      <p>
        <strong>${item.price}</strong>
      </p>
    </div>
  );
}
