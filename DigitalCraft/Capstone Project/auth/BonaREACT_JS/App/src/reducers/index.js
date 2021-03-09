import { combineReducers } from "redux";
import reducerTemplate from "./reducer";
import record from "./record";
//import { formReducer } from "redux-form";

export default combineReducers({
  auth: reducerTemplate,
  recordP:record,
  //form: formReducer,
});
