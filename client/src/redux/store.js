import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import searchReducer from "./reducers/searchProductsReducer";
import productReducer from "./reducers/productReducer";
import suggestionReducer from "./reducers/suggestionReducer";
const reducers = combineReducers({
  searchReducer,
  productReducer,
  suggestionReducer
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
