import { combineReducers } from "redux";

import userSession from "./userSession";
import updateUser from "./updateUser";

export default combineReducers({
  userSession,
  updateUser,
});
