import Actions from '../../actions';

const getDefaultState = () => ({
    isLoading: false,
    // hasError: false,
    error: null,
    data: null, //{},
});

function updateUser(state, action) {
    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    switch (action.type) {
        case Actions.UPDATE_USER:
            return {
                isLoading: true,
                // hasError: false,
                error: null,
                data: state.data, //{},
            };
        case Actions.UPDATE_USER_SUCCESS:
            return {
                isLoading: false,
                // hasError: false,
                error: null,
                data: action.data,
            };
        case Actions.UPDATE_USER_FAIL:
            return {
                isLoading: false,
                // hasError: true,
                error: action.error,
                data: state.data, //{}
            };
        case Actions.RESET_UPDATE_USER:
            return {
                isLoading: false,
                // hasError: false,
                error: null,
                data: null, //{},
            };
        default:
            return state;
    }
}

export default updateUser;