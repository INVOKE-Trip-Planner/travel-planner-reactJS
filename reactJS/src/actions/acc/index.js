import * as createAcc from "./createAcc";
import * as deleteAcc from "./deleteAcc";
import * as getAllAcc from "./getAllAcc";

export default {
  ...getAllAcc,
  ...createAcc,
  ...deleteAcc,
};
