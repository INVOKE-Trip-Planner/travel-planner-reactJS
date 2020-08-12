export const NAME = "AUTH"; // folder name

export const REGISTER = `${NAME}/REGISTER`; // AUTH/REGISTER
export const REGISTER_SUCCESS = `${NAME}/REGISTER_SUCCESS`; // AUTH/REGISTER_SUCCESS
export const REGISTER_FAIL = `${NAME}/REGISTER_FAIL`; // AUTH/REGISTER_FAIL

export const getRegisterData = store => store[NAME].register;

// create action function
export const register = (data) => ({
    type: REGISTER,
    data: data,
});

export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    data,
});

export const registerFail = (error) => ({
    type: REGISTER_FAIL,
    error: error,
});