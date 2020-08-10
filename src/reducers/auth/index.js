import { combineReducers } from "redux";

import login from "./login";
import register from "./register"; // new add for register

export default combineReducers({
  login,
  register, // new add register
});
