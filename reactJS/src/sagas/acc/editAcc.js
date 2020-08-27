import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* editAcc( {data} ) {
    // console.log("EDIT ACC SAGA");

    let token = store.getState().PROFILE.userSession.data;

    // console.log("editAcc saga DATA: ", data);
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append('id', data.accId);
    formData.append('accommodation_name', data.accName);
    formData.append('checkin_date', data.accCheckInDate);
    formData.append('checkin_hour', data.accCheckInHour);
    formData.append('checkin_minute', data.accCheckInMin);
    formData.append('checkout_date', data.accCheckOutDate);
    formData.append('checkout_hour', data.accCheckOutHour);
    formData.append('checkout_minute', data.accCheckOutMin);
    formData.append('cost', data.accCost);
    formData.append('booking_id', data.accBookingId);

    // console.log(formData);

    // pass to the api
    const { response, error } = yield call(api.editAcc, formData, headers);

    // console.log("RESPONSE", response, error);
    // // yield put();

    if (response) {
        yield put(Actions.editAccSuccess(response.data));
        yield put(Actions.getAll(response.data));
    }

    if (error) {
        yield put(Actions.editAccFail(error));
    }
}

// this code runs first and call above
function* watchEditAcc() {
    yield takeLatest(Actions.EDIT_ACC, editAcc)
}

export default function* submit() {
    yield all([fork(watchEditAcc)]);
}