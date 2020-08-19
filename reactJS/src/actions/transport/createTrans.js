export const NAME = "TRANSPORT"; // folder name

export const CREATE_TRANS = `${NAME}/CREATE_TRANS`; // AUTH/CREATETRANS
export const CREATE_TRANS_SUCCESS = `${NAME}/CREATE_TRANS_SUCCESS`; // AUTH/CREATETRANS_SUCCESS
export const CREATE_TRANS_FAIL = `${NAME}/CREATE_TRANS_FAIL`; // AUTH/CREATETRANS_FAIL

export const getCreateTransData = store => store[NAME].createTrans;

// create action function
export const createTrans = (data) => ({
    type: CREATE_TRANS,
    data: data,
});

export const createTransSuccess = (data) => ({
    type: CREATE_TRANS_SUCCESS,
    data,
});

export const createTransFail = (error) => ({
    type: CREATE_TRANS_FAIL,
    error: error,
});