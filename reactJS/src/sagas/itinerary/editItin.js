import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* editItin( {data} ) {
    // console.log("EDIT ITIN SAGA", data);

    let token = store.getState().PROFILE.userSession.data;

    // console.log("editItin saga DATA: ", data);
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    const fields = ['id', 'day', 'schedules'];

    fields.forEach(field => {
        if (data[field]) {
            if (field === 'schedules') {
                data[field].forEach((schedule) => {
                    formData.append('schedules[]', JSON.stringify(schedule));
                })
            } else {
                formData.append(field, data[field]);
            }
        }
    })

    // pass to the api
    const { response, error } = yield call(api.editItin, formData, headers);

    // console.log("RESPONSE", response, error);
    // // yield put();

    if (response) {
        yield put(Actions.editItinSuccess(response.data));
        yield put(Actions.getAll(response.data));
    }

    if (error) {
        yield put(Actions.editItinFail(error));
    }
}

// this code runs first and call above
function* watchEditItin() {
    yield takeLatest(Actions.EDIT_ITIN, editItin)
}

export default function* submit() {
    yield all([fork(watchEditItin)]);
}