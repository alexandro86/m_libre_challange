// actions related to general search
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "./types";

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: response
  };
}
export function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
}

export const fetchThunk = path => async dispatch => {
  dispatch(fetchDataRequest());

  try {
    const response = await fetch(path);
    const result = await response.json();
    dispatch(fetchDataSuccess(result));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
