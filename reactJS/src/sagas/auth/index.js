import { all, fork } from "redux-saga/effects";
import login from "./login";
import register from "./register";
import logout from "./logout";

export default function* home() {
  yield all(
    [
      fork(login), 
      fork(register),
      fork(logout),
    ]
    );
}
