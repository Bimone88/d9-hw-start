import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { favoritesReducer } from "./reducers";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
