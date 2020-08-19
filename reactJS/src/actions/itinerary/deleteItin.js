export const NAME = "TRANSPORT"; // folder name

export const DELETE_TRANS = `${NAME}/DELETE_TRANS`; // AUTH/DELETE_TRANS
export const DELETE_TRANS_SUCCESS = `${NAME}/DELETE_TRANS_SUCCESS`; // AUTH/DELETE_TRANS_SUCCESS
export const DELETE_TRANS_FAIL = `${NAME}/DELETE_TRANS_FAIL`; // AUTH/DELETE_TRANS_FAIL

export const getDeleteTransData = store => store[NAME].deleteTrans;

// create action function
export const deleteTrans = (data) => ({
    type: DELETE_TRANS,
    data: data,
});

export const deleteTransSuccess = (data) => ({
    type: DELETE_TRANS_SUCCESS,
    data,
});

export const deleteTransFail = (error) => ({
    type: DELETE_TRANS_FAIL,
    error: error,
});