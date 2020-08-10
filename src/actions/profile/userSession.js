export const NAME = "PROFILE";

// STORE AND PERSIST USER SESSION
export const ACTIVATE_USER_SESSION = `${NAME}/ACTIVATE_USER_SESSION`;

// REMOVE USER SESSION
export const RESET_USER_SESSION = `${NAME}/RESET_USER_SESSION`;

export const getUserSession = store => store[NAME].userSession; // what does this do?

export const activateUserSession = data => ({
  type: ACTIVATE_USER_SESSION,
  data
});
export const resetUserSession = () => ({
  type: RESET_USER_SESSION
});
