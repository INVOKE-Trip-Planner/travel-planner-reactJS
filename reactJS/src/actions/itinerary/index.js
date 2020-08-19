import * as createItin from "./createItin";
import * as deleteItin from "./deleteItin";
import * as getAllItin from "./getAllItin";
import * as editItin from "./editItin";

export default {
  ...getAllItin,
  ...createItin,
  ...editItin,
  ...deleteItin,
};
