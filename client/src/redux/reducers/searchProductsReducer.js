import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/types";

let initialState = {
  loading: false,
  response: {},
  error: ``
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        response: payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
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
