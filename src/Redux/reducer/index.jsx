import Auth from "./auth.jsx";
import Carts from "./carts.jsx";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  Auth: Auth,
  Carts: Carts,
});
