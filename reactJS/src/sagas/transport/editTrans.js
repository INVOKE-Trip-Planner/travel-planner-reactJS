import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* editTrans( {data} ) {
    // console.log("EDIT TRANS SAGA");

    let token = store.getState().PROFILE.userSession.data;

    // console.log("editTrans saga DATA: ", data);
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append('id', data.transId);
    formData.append('mode', data.transMode);
    formData.append('origin', data.transOrigin);
    formData.append('destination', data.transDestination);
    formData.append('departure_date', data.transDepartureDate);
    formData.append('departure_hour', data.transDepartureHour);
    formData.append('departure_minute', data.transDepartureMin);
    formData.append('arrival_date', data.transArrivalDate);
    formData.append('arrival_hour', data.transArrivalHour);
    formData.append('arrival_minute', data.transArrivalMin);
    formData.append('cost', data.transCost);
    formData.append('booking_id', data.transBookingID);
    formData.append('operator', data.transOperator);

    // pass to the api
    const { response, error } = yield call(api.editTrans, formData, headers);

    // console.log("RESPONSE", response, error);
    // // yield put();

    if (response) {
        yield put(Actions.editTransSuccess(response.data));
        yield put(Actions.getAll(response.data));
    }

    if (error) {
        yield put(Actions.editTransFail(error));
    }
}

// this code runs first and call above
function* watchEditTrans() {
    yield takeLatest(Actions.EDIT_TRANS, editTrans)
}

export default function* submit() {
    yield all([fork(watchEditTrans)]);
}