import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* getAllTrans() {
    // console.log("GETALL TRANS SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.getAllTrans, headers);

    // console.log("get all RESPONSE: ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAllTransSuccess(response.data));
        // yield put(Actions.getAllTrans(response.data));
    }

    if (error) {
        yield put(Actions.getAllTransFail(error));
    }
}

// this code runs first and call above
function* watchGetAllTrans() {
    yield takeLatest(Actions.GET_ALL_TRANS, getAllTrans)
}

export default function* submit() {
    yield all([fork(watchGetAllTrans)]);
}