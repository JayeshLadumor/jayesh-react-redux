import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../redux/reducers/product";

function CategorySelect() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.category);

  React.useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div
      className="flex justify-center"
      style={{
        marginTop: "2rem",
      }}
    >
      Test
    </div>
  );
}

export default CategorySelect;
