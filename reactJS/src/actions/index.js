import auth from "./auth";
import profile from "./profile";
import trips from "./trips";
import acc from "./acc";

export default {
  ...auth,
  ...profile,
  ...trips,
  ...acc,
};
