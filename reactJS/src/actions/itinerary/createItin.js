export const NAME = "ITINERARY"; // folder name

export const CREATE_ITIN = `${NAME}/CREATE_ITIN`; // AUTH/CREATEITIN
export const CREATE_ITIN_SUCCESS = `${NAME}/CREATE_ITIN_SUCCESS`; // AUTH/CREATEITIN_SUCCESS
export const CREATE_ITIN_FAIL = `${NAME}/CREATE_ITIN_FAIL`; // AUTH/CREATEITIN_FAIL

export const getCreateItinData = store => store[NAME].createItin;

// create action function
export const createItin = (data) => ({
    type: CREATE_ITIN,
    data: data,
});

export const createItinSuccess = (data) => ({
    type: CREATE_ITIN_SUCCESS,
    data,
});

export const createItinFail = (error) => ({
    type: CREATE_ITIN_FAIL,
    error: error,
});