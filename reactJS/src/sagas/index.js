import { all, fork } from "redux-saga/effects";

import auth from "./auth";
import trips from "./trips";
import acc from "./acc";

export default function* submit() {
  yield all([fork(auth), fork(trips), fork(acc)]);
}
