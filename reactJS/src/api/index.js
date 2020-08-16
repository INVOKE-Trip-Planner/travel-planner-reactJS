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

export const editTask = (data, headers) => {
  console.log(data);
  console.log(headers);
  return fetchApi('post', `api/accommodation/update/${headers.id}`, data, headers)
};

// export const create = (data, headers) => {
//   return fetchApi('post', "api/createlist", data, headers)
// };

// export const deleteTask = (data, headers) => {
//   // console.log("data id:",data);
//   return fetchApi('delete', `api/deletelist/${data}`, null, headers)
// };

// export const addToDo = data, header