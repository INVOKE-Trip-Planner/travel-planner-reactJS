import * as getAll from "./getAll";
import * as createTrip from "./createTrip";
import * as deleteTrip from "./deleteTrip";
import * as updateTrip from "./updateTrip";


export default {
  ...getAll,
  ...createTrip,
  ...deleteTrip,
  ...updateTrip,
};
