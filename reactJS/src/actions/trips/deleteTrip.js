export const NAME = "TRIPS"; // folder name

export const DELETE_TRIP = `${NAME}/DELETE_TRIP`; // AUTH/DELETETRIP
export const DELETE_TRIP_SUCCESS = `${NAME}/DELETE_TRIP_SUCCESS`; // AUTH/DELETETRIP_SUCCESS
export const DELETE_TRIP_FAIL = `${NAME}/DELETE_TRIP_FAIL`; // AUTH/DELETETRIP_FAIL

export const getDeleteTripData = store => store[NAME].deleteTrip;

// delete action function
export const deleteTrip = (data) => ({
    type: DELETE_TRIP,
    data: data,
});

export const deleteTripSuccess = (data) => ({
    type: DELETE_TRIP_SUCCESS,
    data,
});

export const deleteTripFail = (error) => ({
    type: DELETE_TRIP_FAIL,
    error: error,
});