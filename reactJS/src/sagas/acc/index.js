import { all, fork } from "redux-saga/effects";
import getAllAcc from "./getAllAcc";
import createAcc from "./createAcc";
import editAcc from "./editAcc";
import deleteAcc from "./deleteAcc";

export default function* home() {
  yield all(
      [
        fork(getAllAcc),
        fork(createAcc),
        fork(editAcc),
        fork(deleteAcc),
      ]
    );
}
