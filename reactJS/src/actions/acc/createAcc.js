export const NAME = "ACC"; // folder name

export const CREATE_ACC = `${NAME}/CREATE_ACC`; // AUTH/CREATEACC
export const CREATE_ACC_SUCCESS = `${NAME}/CREATE_ACC_SUCCESS`; // AUTH/CREATEACC_SUCCESS
export const CREATE_ACC_FAIL = `${NAME}/CREATE_ACC_FAIL`; // AUTH/CREATEACC_FAIL

export const getCreateAccData = store => store[NAME].createAcc;

// create action function
export const createAcc = (data) => ({
    type: CREATE_ACC,
    data: data,
});

export const createAccSuccess = (data) => ({
    type: CREATE_ACC_SUCCESS,
    data,
});

export const createAccFail = (error) => ({
    type: CREATE_ACC_FAIL,
    error: error,
});