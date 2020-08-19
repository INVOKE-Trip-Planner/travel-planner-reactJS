import Actions from "../../actions";

// default value function
const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
});

//pure function
function deleteTrip(state, action) {
    // validation
    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    switch(action.type) {

        case Actions.DELETE_TRIP:
            return {
                isLoading: true,
                error: null,
                data: {},
            };

        case Actions.DELETE_TRIP_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            };

        case Actions.DELETE_TRIP_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {},
            };

        default:
            return state;
    }
}

export default deleteTrip;