import { combineReducers } from "redux";

import login from "./login";
import register from "./register"; // new add for register
import logout from "./logout";

export default combineReducers({
  login,
  register, // new add register
  logout,
});
