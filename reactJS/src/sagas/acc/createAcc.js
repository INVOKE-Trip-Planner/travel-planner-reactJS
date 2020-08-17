import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* createAcc( {data} ) {
    console.log("CREATE ACC SAGA");

    let token = store.getState().PROFILE.userSession.data;

    console.log("createAcc saga data: ", data);
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append('destination_id', data.accID);
    formData.append('accommodation_name', data.accName);
    formData.append('checkin_time', data.accCheckIn);
    formData.append('checkout_time', data.accCheckOut);
    formData.append('cost', data.accCost);
    formData.append('booking_id', data.accBookingID);

    console.log(formData);

    // pass to the api
    const { response, error } = yield call(api.createAcc, formData, headers);

    console.log("RESPONSE", response, error);
    // // yield put();

    // if (response && response.data.user_data.status === "Success") {
    //     yield put(Actions.createSuccess(response.data));
    //     yield put(Actions.getAll());
    // }

    // if (error) {
    //     yield put(Actions.createFail(error));
    // }
}

// this code runs first and call above
function* watchCreateAcc() {
    yield takeLatest(Actions.CREATE_ACC, createAcc)
}

export default function* submit() {
    yield all([fork(watchCreateAcc)]);
}