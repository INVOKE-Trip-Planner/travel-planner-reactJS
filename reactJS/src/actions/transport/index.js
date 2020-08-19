import * as createTrans from "./createTrans";
import * as deleteTrans from "./deleteTrans";
import * as getAllTrans from "./getAllTrans";
import * as editTrans from "./editTrans";

export default {
  ...getAllTrans,
  ...createTrans,
  ...editTrans,
  ...deleteTrans,
};
