import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* updateTrip({ data }) {
    // console.log("GETALL SAGA");

    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.updateTrip, headers);

    console.log("RESPONSE ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.updateTripSuccess(response.data));
        // yield put(Actions.updateTrip(response.data));
    }

    if (error) {
        yield put(Actions.updateTripFail(error));
    }
}

// this code runs first and call above
function* watchUpdateTrip() {
    yield takeLatest(Actions.UPDATE_TRIP, updateTrip)
}

export default function* submit() {
    yield all([fork(watchUpdateTrip)]);
}