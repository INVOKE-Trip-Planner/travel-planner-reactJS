import { all, fork } from "redux-saga/effects";

import auth from "./auth";
import trips from "./trips";

export default function* submit() {
  yield all([fork(auth), fork(trips)]);
}
