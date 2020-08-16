import auth from "./auth";
import profile from "./profile";
import trips from "./trips";

export default {
  ...auth,
  ...profile,
  ...trips,
};
