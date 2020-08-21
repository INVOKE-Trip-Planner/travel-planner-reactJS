import { all, fork } from "redux-saga/effects";
import updateUser from "./updateUser";

export default function* home() {
  yield all(
    [
      fork(updateUser), 
    ]
    );
}
