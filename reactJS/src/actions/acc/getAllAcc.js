export const NAME = "ACC"; // folder name

export const GET_ALL_ACC = `${NAME}/GET_ALL_ACC`; // AUTH/GET_ALL_ACC
export const GET_ALL_ACC_SUCCESS = `${NAME}/GET_ALL_ACC_SUCCESS`; // AUTH/GET_ALL_ACC_SUCCESS
export const GET_ALL_ACC_FAIL = `${NAME}/GET_ALL_ACC_FAIL`; // AUTH/GET_ALL_ACC_FAIL

export const getGetAllAccData = store => store[NAME].getAllAcc;

// create action function
export const getAllAcc = (data) => ({
    type: GET_ALL_ACC,
    data: data,
});

export const getAllAccSuccess = (data) => ({
    type: GET_ALL_ACC_SUCCESS,
    data,
});

export const getAllAccFail = (error) => ({
    type: GET_ALL_ACC_FAIL,
    error: error,
});