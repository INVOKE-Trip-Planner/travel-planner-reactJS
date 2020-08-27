import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* deleteItin( {data} ) {
    // console.log("DELETE ITIN SAGA");

    // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);
    // console.log("data: ", data);

    const formData = new FormData();
    formData.append('id', data);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.deleteItin, formData, headers);

    // console.log("Delete response: ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.deleteItinSuccess(response.data));
        yield put(Actions.getAll(response.data));
    }

    if (error) {
        yield put(Actions.deleteItinFail(error));
    }
}

// this code runs first and call above
function* watchDeleteItin() {
    yield takeLatest(Actions.DELETE_ITIN, deleteItin)
}

export default function* submit() {
    yield all([fork(watchDeleteItin)]);
}