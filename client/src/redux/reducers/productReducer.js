import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from "../actions/types";

let initialState = {
  loading: false,
  response: {},
  error: ``
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        response: payload,
        error: null
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        response: {},
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;
