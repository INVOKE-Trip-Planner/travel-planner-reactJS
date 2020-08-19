export const NAME = "ACC"; // folder name

export const EDIT_ACC = `${NAME}/EDIT_ACC`; // AUTH/EDITACC
export const EDIT_ACC_SUCCESS = `${NAME}/EDIT_ACC_SUCCESS`; // AUTH/EDITACC_SUCCESS
export const EDIT_ACC_FAIL = `${NAME}/EDIT_ACC_FAIL`; // AUTH/EDITACC_FAIL

export const getEditAccData = store => store[NAME].editAcc;

// create action function
export const editAcc = (data) => ({
    type: EDIT_ACC,
    data: data,
});

export const editAccSuccess = (data) => ({
    type: EDIT_ACC_SUCCESS,
    data,
});

export const editAccFail = (error) => ({
    type: EDIT_ACC_FAIL,
    error: error,
});