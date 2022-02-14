import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { filters } from "./reducers/filters";
import { pizzas } from "./reducers/pizza";

const rootReducer = combineReducers({
  filters,
  pizzas,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))