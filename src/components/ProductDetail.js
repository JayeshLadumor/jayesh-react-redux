import React from "react";
import { useParams } from "react-router-dom";
import "./productlist.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../redux/reducers/product";
import laptop from "../images/laptop.jpg";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.detail);
  React.useEffect(() => {
    if (params?.id) {
      if ((data && data.id != params.id) || !data) {
        dispatch(getProductDetail(params.id)); // Fetch Product Details
      }
    }
  }, []);

  if (isLoading) {
    return "Loading ...";
  }

  if (error) {
    return `${error || "Something Went Wrong"}`;
  }

  if (data) {
    return (
      <div className="padding-2 flex">
        <div
          className="margin-2"
          style={{
            width: "90rem",
          }}
        >
          <img src={laptop} className="laptop" />
        </div>
        <div className="flex-1 margin-2">
          <h2>{data.name}</h2>
          <p>
            {data.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}{" "}
            INR
          </p>
          <div>{data.description}</div>
        </div>
      </div>
    );
  }
  return null;
}

export default ProductDetail;
