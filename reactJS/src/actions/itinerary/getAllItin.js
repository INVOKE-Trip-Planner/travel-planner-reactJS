export const NAME = "ITINERARY"; // folder name

export const GET_ALL_ITIN = `${NAME}/GET_ALL_ITIN`; // AUTH/GET_ALL_ITIN
export const GET_ALL_ITIN_SUCCESS = `${NAME}/GET_ALL_ITIN_SUCCESS`; // AUTH/GET_ALL_ITIN_SUCCESS
export const GET_ALL_ITIN_FAIL = `${NAME}/GET_ALL_ITIN_FAIL`; // AUTH/GET_ALL_ITIN_FAIL

export const getGetAllItinData = store => store[NAME].getAllItin;

// create action function
export const getAllItin = (data) => ({
    type: GET_ALL_ITIN,
    data: data,
});

export const getAllItinSuccess = (data) => ({
    type: GET_ALL_ITIN_SUCCESS,
    data,
});

export const getAllItinFail = (error) => ({
    type: GET_ALL_ITIN_FAIL,
    error: error,
});