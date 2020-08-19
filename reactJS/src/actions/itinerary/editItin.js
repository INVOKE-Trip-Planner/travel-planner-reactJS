export const NAME = "ITINERARY"; // folder name

export const EDIT_ITIN = `${NAME}/EDIT_ITIN`; // AUTH/EDITITIN
export const EDIT_ITIN_SUCCESS = `${NAME}/EDIT_ITIN_SUCCESS`; // AUTH/EDITITIN_SUCCESS
export const EDIT_ITIN_FAIL = `${NAME}/EDIT_ITIN_FAIL`; // AUTH/EDITITIN_FAIL

export const getEditItinData = store => store[NAME].editItin;

// create action function
export const editItin = (data) => ({
    type: EDIT_ITIN,
    data: data,
});

export const editItinSuccess = (data) => ({
    type: EDIT_ITIN_SUCCESS,
    data,
});

export const editItinFail = (error) => ({
    type: EDIT_ITIN_FAIL,
    error: error,
});