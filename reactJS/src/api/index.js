import fetchApi from "./helper";
import {store} from "store/index";

// ------------LOGIN------------
export const login = data => {
  return fetchApi("post", "api/login", data);
};

//-----------REGISTER-------------------
export const register = (data) => {
  return fetchApi('post', 'api/register', data)
};

// ------------LOGOUT------------
export const logout = token => {
  return fetchApi('post', 'api/logout', null, token);
}

//-----------USER------------------------
export const updateUser = (data, token) => {
  return fetchApi('post', 'api/user', data, token);
}

export const searchUser = (query) => {
  return fetchApi('get', `api/user/search/${query}`, null, 
  { Authorization: `Bearer ${store.getState().PROFILE.userSession.data}` });
}

//--------------TRIPS------------------------
export const getAll = (headers) => {
  return fetchApi('get', "api/trip", null, headers)
};

export const createTrip = (data, headers) => {
  console.log(data);
  console.log(headers);
  return fetchApi('post', "api/trip", data, headers)
};

export const updateTrip = (data, headers) => {
  return fetchApi('post', `api/trip/update`, data, headers)
};

export const deleteTrip = (data, headers) => {
  // console.log("data id:",data);
  return fetchApi('post', 'api/trip/delete', data, headers)
};

// ---------ACCOMMODATION---------------------------

export const getAllAcc = (headers) => {
  return fetchApi('get', "api/accommodation", null, headers)
};
export const createAcc = (data, headers) => {
  console.log(data);
  console.log(headers);
  return fetchApi('post', "api/accommodation", data, headers)
};
export const editAcc = (data, headers) => {
  return fetchApi('post', 'api/accommodation/update', data, headers)
};
export const deleteAcc = (data, headers) => {
  // console.log("data id:",data);
  return fetchApi('post', 'api/accommodation/delete', data, headers)
};

//-----------TRANSPORT----------------------------
export const getAllTrans = (headers) => {
  return fetchApi('get', "api/transport", null, headers)
};
export const createTrans = (data, headers) => {
  return fetchApi('post', "api/transport", data, headers)
};
export const editTrans = (data, headers) => {
  return fetchApi('post', 'api/transport/update', data, headers)
};
export const deleteTrans = (data, headers) => {
  // console.log("data id:",data);
  return fetchApi('post', 'api/transport/delete', data, headers)
};

//-----------ITINERARY----------------------------
export const getAllItin = (headers) => {
  return fetchApi('get', "api/itinerary", null, headers)
};
export const createItin = (data, headers) => {
  console.log("DATA pass to api", data);
  return fetchApi('post', "api/itinerary", data, headers)
};
export const editItin = (data, headers) => {
  return fetchApi('post', 'api/itinerary/update', data, headers)
};
export const deleteItin = (data, headers) => {
  // console.log("data id:",data);
  return fetchApi('post', 'api/itinerary/delete', data, headers)
};

// export const addToDo = data, header

//-----------TRIPOSO----------------------------
export const searchArticles = (query) => {
  const formData = new FormData();
  formData.append('city', query);
  return fetchApi('post', `api/triposo/articles/`, formData);
}