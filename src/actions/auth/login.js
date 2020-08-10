export const NAME = "AUTH";

export const LOGIN = `${NAME}/LOGIN`;
export const LOGIN_SUCCESS = `${NAME}/LOGIN_SUCCESS`;
export const LOGIN_FAIL = `${NAME}/LOGIN_FAIL`;
export const RESET_LOGIN = `${NAME}/RESET_LOGIN`;

export const getLoginData = store => store[NAME].login; // what does this do?

export const login = data => ({
  type: LOGIN,
  data
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  error
});

export const resetLogin = () => ({
  type: RESET_LOGIN
});
