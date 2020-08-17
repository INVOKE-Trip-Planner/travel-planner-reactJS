export const NAME = "ACC"; // folder name

export const DELETE_ACC = `${NAME}/DELETE_ACC`; // AUTH/DELETE_ACC
export const DELETE_ACC_SUCCESS = `${NAME}/DELETE_ACC_SUCCESS`; // AUTH/DELETE_ACC_SUCCESS
export const DELETE_ACC_FAIL = `${NAME}/DELETE_ACC_FAIL`; // AUTH/DELETE_ACC_FAIL

export const getDeleteAccData = store => store[NAME].deleteAcc;

// create action function
export const deleteAcc = (data) => ({
    type: DELETE_ACC,
    data: data,
});

export const deleteAccSuccess = (data) => ({
    type: DELETE_ACC_SUCCESS,
    data,
});

export const deleteAccFail = (error) => ({
    type: DELETE_ACC_FAIL,
    error: error,
});