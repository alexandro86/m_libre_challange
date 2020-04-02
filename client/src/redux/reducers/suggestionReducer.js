import {
  ADD_SUGGESTIONS,
  SHOW_SUGGESTIONS,
  LOAD_CONTENT,
  CHANGE_SUGGESTION
} from "../actions/types";

const initialState = {
  options: [],
  option: "",
  visible: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SUGGESTIONS: {
      const findIt = element => element === payload;
      const result = state.options;
      const index = state.options.findIndex(findIt);
      if (index === -1) {
        result.push(payload);
        return {
          options: result,
          option: payload,
          visible: false
        };
      }
      return state;
    }

    case SHOW_SUGGESTIONS:
      const result = state.options;
      return {
        option: payload,
        options: result,
        visible: true
      };
    case LOAD_CONTENT: {
      const result = state.options;
      return {
        option: payload,
        options: result,
        visible: false
      };
    }
    case CHANGE_SUGGESTION: {
      const result = state.options;
      return {
        option: payload,
        options: result,
        visible: true
      };
    }
    default:
      return state;
  }
};

export default reducer;
