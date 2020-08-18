import * as createAcc from "./createAcc";
import * as deleteAcc from "./deleteAcc";
import * as getAllAcc from "./getAllAcc";
import * as editAcc from "./editAcc";

export default {
  ...getAllAcc,
  ...createAcc,
  ...editAcc,
  ...deleteAcc,
};
