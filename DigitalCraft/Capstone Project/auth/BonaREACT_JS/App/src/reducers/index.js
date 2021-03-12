import { combineReducers } from "redux";
import reducerTemplate from "./reducer";
import record from "./record";


export default combineReducers({
  auth: reducerTemplate,
  recordP:record,
});
