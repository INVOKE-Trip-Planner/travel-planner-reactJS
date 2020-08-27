import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* getAllItin() {
    // console.log("GETALL ITIN SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.getAllItin, headers);

    // console.log("get all RESPONSE: ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAllItinSuccess(response.data));
        // yield put(Actions.getAllItin(response.data));
    }

    if (error) {
        yield put(Actions.getAllItinFail(error));
    }
}

// this code runs first and call above
function* watchGetAllItin() {
    yield takeLatest(Actions.GET_ALL_ITIN, getAllItin)
}

export default function* submit() {
    yield all([fork(watchGetAllItin)]);
}