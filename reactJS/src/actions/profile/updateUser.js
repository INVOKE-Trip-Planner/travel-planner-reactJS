export const NAME="PROFILE";

export const UPDATE_USER = `${NAME}/UPDATE_USER`;
export const UPDATE_USER_SUCCESS = `${NAME}/UPDATE_USER_SUCCESS`;
export const UPDATE_USER_FAIL = `${NAME}/UPDATE_USER_FAIL`;
export const RESET_UPDATE_USER = `${NAME}/RESET_UPDATE_USER`;

// only a shortcut to access store['AUTH'].updateUser
// nothing to do with where to save data
export const getUpdateUserData = store => store[NAME].updateUser;  //store[NAME].updateUser; 

export const updateUser = data => ({
    type: UPDATE_USER,
    data,
});

export const updateUserSuccess = data => ({
    type: UPDATE_USER_SUCCESS,
    data,
});

export const updateUserFail = error => ({
    type: UPDATE_USER_FAIL,
    error,
});

export const resetUpdateUser = () => ({
    type: RESET_UPDATE_USER,
  });