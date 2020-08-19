export const NAME = "TRIPS"; // folder name

export const UPDATE_TRIP = `${NAME}/UPDATE_TRIP`; // AUTH/UPDATETRIP
export const UPDATE_TRIP_SUCCESS = `${NAME}/UPDATE_TRIP_SUCCESS`; // AUTH/UPDATETRIP_SUCCESS
export const UPDATE_TRIP_FAIL = `${NAME}/UPDATE_TRIP_FAIL`; // AUTH/UPDATETRIP_FAIL

export const getUpdateTripData = store => store[NAME].updateTrip;

// update action function
export const updateTrip = (data) => ({
    type: UPDATE_TRIP,
    data: data,
});

export const updateTripSuccess = (data) => ({
    type: UPDATE_TRIP_SUCCESS,
    data,
});

export const updateTripFail = (error) => ({
    type: UPDATE_TRIP_FAIL,
    error: error,
});