import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* updateUser({ data }) {
    // console.log("UPDATE USER SAGA");
    const formData = new FormData();
    const fields = ['name', 'username', 'email', 'password', 'password_confirmation', 'phone', 'gender', 'birth_date', 'avatar'];

    fields.forEach(field => {
        if (data[field]) {
          formData.append(field, data[field]);
        }
    });   
    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.updateUser, formData, headers);

    console.log("RESPONSE ", response, error);
    // yield put();

    if (response) {
        // yield put(Actions.getAll());
        yield put(Actions.updateUserSuccess(response.data));
        // yield put(Actions.updateUser(response.data));
    }

    if (error) {
        yield put(Actions.updateUserFail(error.response.data));
    }
}

// this code runs first and call above
function* watchUpdateUser() {
    yield takeLatest(Actions.UPDATE_USER, updateUser)
}

export default function* submit() {
    yield all([fork(watchUpdateUser)]);
}