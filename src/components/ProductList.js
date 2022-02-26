import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./productlist.css";
import { getProductList } from "../redux/reducers/product";
import CategorySelect from "./CategorySelect";
import laptop from "../images/laptop.jpg";

function ProductList() {
  const { isLoading, error, data, filter } = useSelector((state) => state.list);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (data.length == 0) {
      dispatch(getProductList()); // fetch product list
    }
  }, []);

  // Filter Data By Category
  const filteredData = React.useMemo(() => {
    if (filter == "All") {
      return data;
    }
    return data.filter((d) => d.categoryId == filter);
  }, [filter, data]);
  if (isLoading) {
    return "Loading ...";
  }

  if (error) {
    return `${error || "Something Went Wrong"}`;
  }

  return (
    <>
      <CategorySelect />
      <div className="padding-2 flex flex-wrap justify-center">
        {filteredData.map((product) => (
          <NavLink
            key={product.id}
            className="text-black text-decorate-none"
            to={`/${product.id}`}
          >
            <div className="padding-2 box items-center flex flex-col margin-2">
              <img src={laptop} className="laptop" />
              <h2>{product.name}</h2>
              <p>{product.model}</p>
              <p>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}{" "}
                INR
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default ProductList;
