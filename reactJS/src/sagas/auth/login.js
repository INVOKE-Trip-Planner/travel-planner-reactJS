import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

import { encode } from "../../services/encryption";


function* login({ data }) { // data coming from view

  // console.log("LOG IN SAGA", data);

  // data from view
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);

  const { response, error } = yield call(api.login, formData); // get api response

  // console.log("RESPONSE", error);

  if (response && response.status !== null ) {

    let token = response.data.token;

    yield put(Actions.loginSuccess(response.data));  // part where we pass the data to the front end

    // update the user session
    yield put(Actions.activateUserSession(token)); // login success => user get token
    yield put(Actions.updateUserSuccess(response.data.user)); // login success => user get token
  }

  if(error) {
    yield put(Actions.loginFail(error.response.data));
  }
}

function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
