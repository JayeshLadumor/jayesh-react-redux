import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./productlist.css";
import { getProductList } from "../redux/reducers/product";
import CategorySelect from "./CategorySelect";

function ProductList() {
  const { isLoading, error, data } = useSelector((state) => state.list);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (data.length == 0) {
      dispatch(getProductList());
    }
  }, []);

  if (isLoading) {
    return "Loading ...";
  }

  if (error) {
    return `${error || "Something Went Wrong"}`;
  }

  return (
    <>
      <CategorySelect />
      <div className="flex justify-center"></div>
      <div className="padding-2 flex flex-wrap justify-center">
        {data.map((product) => (
          <NavLink
            key={product.id}
            className="text-black text-decorate-none"
            to={`/${product.id}`}
          >
            <div
              className="padding-2 box items-center flex flex-col margin-2"
              style={{
                border: "2px solid black",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <h2>{product.name}</h2>
              <p>{product.model}</p>
              <p>{product.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default ProductList;
