const initialState = {
  list: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const START = "start";

export default function (prevState = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
}
