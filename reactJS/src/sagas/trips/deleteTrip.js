import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* deleteTrip({ data }) {
    // console.log("GETALL SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append('id', data.id)
    // pass to the api
    const { response, error } = yield call(api.deleteTrip, formData, headers);

    // console.log("RESPONSE ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAll());
        yield put(Actions.deleteTripSuccess(response.data));
        // yield put(Actions.deleteTrip(response.data));
    }

    if (error) {
        yield put(Actions.deleteTripFail(error));
    }
}

// this code runs first and call above
function* watchDeleteTrip() {
    yield takeLatest(Actions.DELETE_TRIP, deleteTrip)
}

export default function* submit() {
    yield all([fork(watchDeleteTrip)]);
}