import auth from "./auth";
import profile from "./profile";
import trips from "./trips";
import acc from "./acc";
import transport from "./transport";
import itinerary from "./itinerary";

export default {
  ...auth,
  ...profile,
  ...trips,
  ...acc,
  ...transport,
  ...itinerary,
};
