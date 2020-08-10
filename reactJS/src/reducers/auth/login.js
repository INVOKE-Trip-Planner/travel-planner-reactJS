import Actions from "../../actions";

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function login(state, action) {
  if (typeof state === "undefined") {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.LOGIN:
      return {
        isLoading: true,
        error: null,
        data: {}
      };

    case Actions.LOGIN_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: action.data
      };
    case Actions.LOGIN_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: {}
      };
    case Actions.RESET_LOGIN:
      return getDefaultState();
    default:
      return state;
  }
}

export default login;
