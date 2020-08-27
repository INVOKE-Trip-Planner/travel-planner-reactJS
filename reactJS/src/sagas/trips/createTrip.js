import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* createTrip({ data }) {
    // console.log("CREATETRIP SAGA");
    const formData = new FormData();
    const fields = ['trip_name', 'origin', 'start_date', 'end_date', 'group_type', 'trip_type', 'users', 'destinations'];

    fields.forEach(field => {
        if (data[field]) {
          if (field === 'destinations') {
            data[field].forEach((destination) => {
              formData.append('destinations[]', JSON.stringify(destination));
            })
          } else if (field === 'users') {
            data[field].forEach((user) => {
              formData.append('users[]', user);
            })
          } else {
            formData.append(field, data[field]);
          }
        }
    });    

    const token = store.getState().PROFILE.userSession.data;

    const headers = { Authorization: `Bearer ${token}` };

    const { response, error } = yield call(api.createTrip, formData, headers);

    // console.log("RESPONSE ", response, error);

    if (response) {
        yield put(Actions.getAll());
        yield put(Actions.createTripSuccess(response.data));
    }

    if (error) {
        yield put(Actions.createTripFail(error.response.data));
    }
}

// this code runs first and call above
function* watchCreateTrip() {
    yield takeLatest(Actions.CREATE_TRIP, createTrip)
}

export default function* submit() {
    yield all([fork(watchCreateTrip)]);
}