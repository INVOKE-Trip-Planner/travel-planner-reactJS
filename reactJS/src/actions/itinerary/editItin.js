export const NAME = "TRANSPORT"; // folder name

export const EDIT_TRANS = `${NAME}/EDIT_TRANS`; // AUTH/EDITTRANS
export const EDIT_TRANS_SUCCESS = `${NAME}/EDIT_TRANS_SUCCESS`; // AUTH/EDITTRANS_SUCCESS
export const EDIT_TRANS_FAIL = `${NAME}/EDIT_TRANS_FAIL`; // AUTH/EDITTRANS_FAIL

export const getEditTransData = store => store[NAME].editTrans;

// create action function
export const editTrans = (data) => ({
    type: EDIT_TRANS,
    data: data,
});

export const editTransSuccess = (data) => ({
    type: EDIT_TRANS_SUCCESS,
    data,
});

export const editTransFail = (error) => ({
    type: EDIT_TRANS_FAIL,
    error: error,
});