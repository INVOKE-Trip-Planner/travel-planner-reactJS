import { all, fork } from "redux-saga/effects";

import auth from "./auth";
import trips from "./trips";
import acc from "./acc";
import transport from "./transport";
import itinerary from "./itinerary";

export default function* submit() {
  yield all([fork(auth), fork(trips), fork(acc), fork(transport), fork(itinerary)]);
}
