import {
  START_PRODUCT_LIST,
  SUCCESS_PRODUCT_LIST,
  ERROR_PRODUCT_LIST,
  START_PRODUCT_DETAIL,
  SUCCESS_PRODUCT_DETAIL,
  ERROR_PRODUCT_DETAIL,
  START_CATEGORY_LIST,
  SUCCESS_CATEGORY_LIST,
  ERROR_CATEGORY_LIST,
} from "../actions/product";
import {
  getProductListAPI,
  getProductDetailAPI,
  getCategoryAPI,
} from "../api/product";

const initialState = {
  list: {
    data: [],
    isLoading: false,
    error: null,
    filter: null,
  },
  detail: {
    data: null,
    isLoading: false,
    error: null,
  },
  category: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case START_PRODUCT_LIST:
      return {
        ...prevState,
        list: {
          ...prevState.list,
          isLoading: true,
        },
      };
    case SUCCESS_PRODUCT_LIST:
      return {
        ...prevState,
        list: {
          ...prevState.list,
          isLoading: false,
          data: action.payload,
        },
      };
    case ERROR_PRODUCT_LIST:
      return {
        ...prevState,
        list: {
          ...prevState.list,
          isLoading: false,
          error: action.message,
        },
      };
    case START_PRODUCT_DETAIL:
      return {
        ...prevState,
        detail: {
          ...prevState.detail,
          isLoading: true,
          error: action.message,
        },
      };
    case SUCCESS_PRODUCT_DETAIL:
      return {
        ...prevState,
        detail: {
          ...prevState.detail,
          isLoading: false,
          data: action.payload,
        },
      };
    case ERROR_PRODUCT_DETAIL:
      return {
        ...prevState,
        detail: {
          ...prevState.detail,
          isLoading: false,
        },
      };
    case START_CATEGORY_LIST:
      return {
        ...prevState,
        category: {
          ...prevState.category,
          isLoading: true,
        },
      };
    case SUCCESS_CATEGORY_LIST:
      return {
        ...prevState,
        category: {
          ...prevState.category,
          isLoading: false,
          data: action.payload,
        },
      };
    case ERROR_CATEGORY_LIST:
      return {
        ...prevState,
        category: {
          ...prevState.category,
          isLoading: false,
        },
      };
    default:
      return prevState;
  }
}

//
export const getProductList = () => async (dispatch, getState) => {
  console.log("getProduct");

  dispatch({
    type: START_PRODUCT_LIST,
  });

  try {
    const response = await getProductListAPI();
    console.log("response", response);
    dispatch({
      type: SUCCESS_PRODUCT_LIST,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_PRODUCT_LIST,
      message: e.message,
    });
  }
};

export const getProductDetail = (productId) => async (dispatch, getState) => {
  console.log("getProduct");

  dispatch({
    type: START_PRODUCT_DETAIL,
  });

  try {
    const response = await getProductDetailAPI(productId);
    dispatch({
      type: SUCCESS_PRODUCT_DETAIL,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_PRODUCT_DETAIL,
    });
  }
};

//
export const getCategory = () => async (dispatch, getState) => {
  console.log("getProduct");

  dispatch({
    type: START_CATEGORY_LIST,
  });

  try {
    const response = await getCategoryAPI();
    dispatch({
      type: SUCCESS_CATEGORY_LIST,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_CATEGORY_LIST,
    });
  }
};
