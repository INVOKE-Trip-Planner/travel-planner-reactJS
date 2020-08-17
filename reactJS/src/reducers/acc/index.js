import { combineReducers } from "redux";

import createAcc from "./createAcc";
import deleteAcc from "./deleteAcc";
import getAllAcc from "./getAllAcc";

export default combineReducers({
    getAllAcc,
    createAcc,
    deleteAcc,
});