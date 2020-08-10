import Actions from "../../actions";

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function userSession(state, action) {
  if (typeof state === "undefined") {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.ACTIVATE_USER_SESSION:
      return {
        isLoading: false,
        error: null,
        data: action.data
      };
    case Actions.RESET_USER_SESSION:
      return getDefaultState();
    default:
      return state;
  }
}

export default userSession;
