import { all, fork } from "redux-saga/effects";
import getAllItin from "./getAllItin";
import createItin from "./createItin";
import editItin from "./editItin";
import deleteItin from "./deleteItin";

export default function* home() {
  yield all(
      [
        fork(getAllItin),
        fork(createItin),
        fork(editItin),
        fork(deleteItin),
      ]
    );
}
