import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

function* register({data}) {
    // console.log("REGISTER SAGA");

    // console.log("DATA", data);

    // formData
    const formData = new FormData();
    formData.append('name', data.name);
    // formData.append('name', "test");
    formData.append('username', data.username);
    // formData.append('username', "aizat");
    formData.append('email', data.email);
    // formData.append('email', "test@gmail.com");
    formData.append('password', data.password);
    // formData.append('password', "1234abcd");
    formData.append('password_confirmation', data.password_confirmation);
    // formData.append('password_confirmation', "1234abcd");

    // // pass to the api
    const { response, error } = yield call(api.register, formData);

    // console.log("RESPONSE", response, error);

    if (response) {
        yield put(Actions.registerSuccess(response.data));
    }

    if (error) {
        yield put(Actions.registerFail(error.response.data));
    }
}

// this code runs first and call above
function* watchRegister() {
    yield takeLatest(Actions.REGISTER, register)
}

export default function* submit() {
    yield all([fork(watchRegister)]);
}
