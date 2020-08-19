import { combineReducers } from "redux";

import createItin from "./createItin";
import editItin from "./editItin";
import deleteItin from "./deleteItin";
import getAllItin from "./getAllItin";

export default combineReducers({
    getAllItin,
    createItin,
    editItin,
    deleteItin,
});