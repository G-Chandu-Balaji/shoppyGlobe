import React from "react";
import { useParams } from "react-router";

export default function Product_Detail() {
  const { id } = useParams();
  console.log("id ", id);

  return <div>Product_Detail </div>;
}
