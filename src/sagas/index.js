import { all, fork } from "redux-saga/effects";

import auth from "./auth";

export default function* submit() {
  yield all([fork(auth)]);
}
