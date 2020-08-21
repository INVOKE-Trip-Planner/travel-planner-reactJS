import Actions from '../../actions';

const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: null, //{},
});

function logout(state, action) {
    // console.log('reducers');

    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    switch (action.type) {
        case Actions.LOGOUT:
            return {
                isLoading: true,
                error: null,
                data: null, //{},
            };
        case Actions.LOGOUT_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            };
        case Actions.LOGOUT_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: null, //{},
            }
        default:
            return state;
    }
}

export default logout;