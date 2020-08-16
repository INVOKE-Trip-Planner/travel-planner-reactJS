import { all, fork } from "redux-saga/effects";
import getAll from "./getAll";
// import create from "./create";
// import deleteTask from "./deleteTask";
// import editTask from "./editTask";

export default function* home() {
  yield all(
      [
        fork(getAll),
        // fork(create),
        // fork(deleteTask),
        // fork(editTask),
      ]
    );
}
