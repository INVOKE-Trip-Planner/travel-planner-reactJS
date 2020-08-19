import { all, fork } from "redux-saga/effects";
import getAllTrans from "./getAllTrans";
import createTrans from "./createTrans";
import editTrans from "./editTrans";
import deleteTrans from "./deleteTrans";

export default function* home() {
  yield all(
      [
        fork(getAllTrans),
        fork(createTrans),
        fork(editTrans),
        fork(deleteTrans),
      ]
    );
}
