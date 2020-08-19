import { combineReducers } from "redux";

import createTrans from "./createTrans";
import editTrans from "./editTrans";
import deleteTrans from "./deleteTrans";
import getAllTrans from "./getAllTrans";

export default combineReducers({
    getAllTrans,
    createTrans,
    editTrans,
    deleteTrans,
});