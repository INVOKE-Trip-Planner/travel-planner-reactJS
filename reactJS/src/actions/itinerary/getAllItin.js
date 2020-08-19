export const NAME = "TRANSPORT"; // folder name

export const GET_ALL_TRANS = `${NAME}/GET_ALL_TRANS`; // AUTH/GET_ALL_TRANS
export const GET_ALL_TRANS_SUCCESS = `${NAME}/GET_ALL_TRANS_SUCCESS`; // AUTH/GET_ALL_TRANS_SUCCESS
export const GET_ALL_TRANS_FAIL = `${NAME}/GET_ALL_TRANS_FAIL`; // AUTH/GET_ALL_TRANS_FAIL

export const getGetAllTransData = store => store[NAME].getAllTrans;

// create action function
export const getAllTrans = (data) => ({
    type: GET_ALL_TRANS,
    data: data,
});

export const getAllTransSuccess = (data) => ({
    type: GET_ALL_TRANS_SUCCESS,
    data,
});

export const getAllTransFail = (error) => ({
    type: GET_ALL_TRANS_FAIL,
    error: error,
});