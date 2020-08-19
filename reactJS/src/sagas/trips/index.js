import { all, fork } from "redux-saga/effects";
import getAll from "./getAll";
import createTrip from "./createTrip";
import deleteTrip from "./deleteTrip";
import updateTrip from "./updateTrip";

export default function* home() {
  yield all(
      [
        fork(getAll),
        fork(createTrip),
        fork(deleteTrip),
        fork(updateTrip),
      ]
    );
}
