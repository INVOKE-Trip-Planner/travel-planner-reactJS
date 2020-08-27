import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* logout() {
    // console.log("LOGOUT SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.logout, headers);

    // console.log("GET ALL RESPONSE ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.logoutSuccess(response.data));
        yield put(Actions.resetUserSession());
        yield put(Actions.resetUpdateUser());
        // yield put(Actions.logout(response.data));
    }

    if (error) {
        yield put(Actions.logoutFail(error));
    }
}

// this code runs first and call above
function* watchLogout() {
    yield takeLatest(Actions.LOGOUT, logout)
}

export default function* submit() {
    yield all([fork(watchLogout)]);
}