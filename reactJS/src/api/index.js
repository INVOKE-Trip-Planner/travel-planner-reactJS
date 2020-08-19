import fetchApi from "./helper";

export const login = data => {
  return fetchApi("post", "api/login", data);
};

//register
export const register = (data) => {
  return fetchApi('post', 'api/register', data)
};

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

export const getAllTrans = (headers) => {
  return fetchApi('get', "api/transport", null, headers)
};

export const createTrans = (data, headers) => {
  console.log(data);
  console.log(headers);
  return fetchApi('post', "api/transport", data, headers)
};

export const editTrans = (data, headers) => {
  return fetchApi('post', 'api/transport/update', data, headers)
};


export const deleteTrans = (data, headers) => {
  // console.log("data id:",data);
  return fetchApi('post', 'api/transport/delete', data, headers)
};

// export const addToDo = data, header