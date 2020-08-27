import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* getAllAcc() {
    // console.log("GETALL ACC SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.getAllAcc, headers);

    // console.log("get all RESPONSE: ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAllAccSuccess(response.data));
        // yield put(Actions.getAllAcc(response.data));
    }

    if (error) {
        yield put(Actions.getAllAccFail(error));
    }
}

// this code runs first and call above
function* watchGetAllAcc() {
    yield takeLatest(Actions.GET_ALL_ACC, getAllAcc)
}

export default function* submit() {
    yield all([fork(watchGetAllAcc)]);
}