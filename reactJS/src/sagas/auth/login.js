import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

import { encode } from "../../services/encryption";


function* login({ data }) { // data coming from view

  console.log(data);

  // data from view
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  const { response, error } = yield call(api.login, formData); // get api response

  if(response && response.data.status === "Success") {

    let token = response.data.token;

    console.log(response);
    yield put(Actions.loginSuccess(response.data));  // part where we pass the data to the front end

    // update the user session
    yield put(Actions.activateUserSession(token)); // login success => user get token
  }

  if(error) {
    yield put(Actions.loginFail(error));
  }
}

function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
