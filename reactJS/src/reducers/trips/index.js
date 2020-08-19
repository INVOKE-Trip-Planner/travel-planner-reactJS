import { combineReducers } from "redux";

import getAll from "./getAll";
import createTrip from "./createTrip";
import deleteTrip from "./deleteTrip";
import updateTrip from "./updateTrip";

export default combineReducers({
    getAll,
    createTrip,
    deleteTrip,
    updateTrip,
});