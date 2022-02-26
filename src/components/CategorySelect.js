import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { SET_CATEGORY_FILTER } from "../redux/actions/product";
import { getCategory } from "../redux/reducers/product";

function CategorySelect() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.category);
  const { filter } = useSelector((state) => state.list);

  React.useEffect(() => {
    if (data.length == 0) {
      dispatch(getCategory());
    }
  }, []);

  if (isLoading) {
    return <BeatLoader />;
  }

  if (error) {
    return error;
  }

  return (
    <div
      className="flex justify-center"
      style={{
        marginTop: "2rem",
      }}
    >
      <select
        value={filter}
        onChange={(e) => {
          dispatch({
            type: SET_CATEGORY_FILTER,
            payload: e.target.value,
          });
        }}
      >
        <option value="All">Select All</option>
        {data.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>{" "}
    </div>
  );
}

export default CategorySelect;
