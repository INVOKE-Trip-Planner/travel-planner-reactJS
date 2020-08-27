import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* getAll() {
    // console.log("GETALL SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.getAll, headers);

    // console.log("GET ALL RESPONSE ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAllSuccess(response.data));
        // yield put(Actions.getAll(response.data));
    }

    if (error) {
        yield put(Actions.getAllFail(error));
    }
}

// this code runs first and call above
function* watchGetAll() {
    yield takeLatest(Actions.GET_ALL, getAll)
}

export default function* submit() {
    yield all([fork(watchGetAll)]);
}