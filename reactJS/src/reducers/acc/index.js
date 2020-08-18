import { combineReducers } from "redux";

import createAcc from "./createAcc";
import editAcc from "./editAcc";
import deleteAcc from "./deleteAcc";
import getAllAcc from "./getAllAcc";

export default combineReducers({
    getAllAcc,
    createAcc,
    editAcc,
    deleteAcc,
});