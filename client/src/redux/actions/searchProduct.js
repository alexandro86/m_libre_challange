// actions related to search product
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST
} from "./types";

export function fetchProductRequest() {
  return {
    type: FETCH_PRODUCT_REQUEST
  };
}

export function fetchProductSuccess(response) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: response
  };
}
export function fetchpProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  };
}

export const fetchThunkProduct = path => async dispatch => {
  dispatch(fetchProductRequest());

  try {
    const response = await fetch(path);
    const result = await response.json();
    dispatch(fetchProductSuccess(result));
  } catch (error) {
    dispatch(fetchpProductFailure(error));
  }
};
