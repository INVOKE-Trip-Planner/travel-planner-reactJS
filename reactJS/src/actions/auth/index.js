import * as login from "./login";
import * as register from "./register";
import * as logout from "./logout";

export default {
  ...login,
  ...register,
  ...logout,
};
