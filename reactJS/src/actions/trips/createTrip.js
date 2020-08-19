export const NAME = "TRIPS"; // folder name

export const CREATE_TRIP = `${NAME}/CREATE_TRIP`; // AUTH/CREATETRIP
export const CREATE_TRIP_SUCCESS = `${NAME}/CREATE_TRIP_SUCCESS`; // AUTH/CREATETRIP_SUCCESS
export const CREATE_TRIP_FAIL = `${NAME}/CREATE_TRIP_FAIL`; // AUTH/CREATETRIP_FAIL

export const getCreateTripData = store => store[NAME].createTrip;

// create action function
export const createTrip = (data) => ({
    type: CREATE_TRIP,
    data: data,
});

export const createTripSuccess = (data) => ({
    type: CREATE_TRIP_SUCCESS,
    data,
});

export const createTripFail = (error) => ({
    type: CREATE_TRIP_FAIL,
    error: error,
});