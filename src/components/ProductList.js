import React from "react";
import { useSelector } from "react-redux";

function ProductList() {
  const state = useSelector((state) => state);
  console.log("state", state);

  return <div>Product List</div>;
}

export default ProductList;
