export const NAME = "ITINERARY"; // folder name

export const DELETE_ITIN = `${NAME}/DELETE_ITIN`; // AUTH/DELETE_ITIN
export const DELETE_ITIN_SUCCESS = `${NAME}/DELETE_ITIN_SUCCESS`; // AUTH/DELETE_ITIN_SUCCESS
export const DELETE_ITIN_FAIL = `${NAME}/DELETE_ITIN_FAIL`; // AUTH/DELETE_ITIN_FAIL

export const getDeleteItinData = store => store[NAME].deleteItin;

// create action function
export const deleteItin = (data) => ({
    type: DELETE_ITIN,
    data: data,
});

export const deleteItinSuccess = (data) => ({
    type: DELETE_ITIN_SUCCESS,
    data,
});

export const deleteItinFail = (error) => ({
    type: DELETE_ITIN_FAIL,
    error: error,
});