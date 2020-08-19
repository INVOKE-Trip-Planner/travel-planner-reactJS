import Actions from "../../actions";

// default value function
const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
});

//pure function
function editItin(state, action) {
    // validation
    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    // if action.type === LOGIN
    // else if action.type === LOGIN

    switch(action.type) {

        case Actions.EDIT_ITIN:
            return {
                isLoading: true,
                error: null,
                data: {},
            };

        case Actions.EDIT_ITIN_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            };

        case Actions.EDIT_ITIN_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {},
            };

        default:
            return state;
    }
}

export default editItin;