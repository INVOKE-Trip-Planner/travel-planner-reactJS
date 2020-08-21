export const NAME = 'AUTH';

export const LOGOUT = `${NAME}/LOGOUT`;
export const LOGOUT_SUCCESS = `${NAME}/LOGOUT_SUCCESS`;
export const LOGOUT_FAIL = `${NAME}/LOGOUT_FAIL`;

export const getLogoutData = store => store[NAME].logout;

export const logout = data => ({
    type: LOGOUT,
    data,
});

export const logoutSuccess = data => ({
    type: LOGOUT_SUCCESS,
    data,
});

export const logoutFail = data => ({
    type: LOGOUT_FAIL,
    data,
})