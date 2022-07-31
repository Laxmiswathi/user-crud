import http from "../http-common";
const getAll = () => {
  return http.get(`/viewAllUser`);
};
const get = user_Id => {
  return http.get(`/User/viewUser/${user_Id}`);
};
const create = data => {
  return http.post("/addUser", data);
};
const update = (user_Id, data) => {
  return http.put(`/updateUser/${user_Id}`, data);
};
const remove = user_Id => {
  return http.delete(`/deleteusers/{user_Id}/${user_Id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const UserService = {
  getAll,
  get,
  create,
  update,
 // remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default UserService;