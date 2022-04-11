import { combineReducers } from "redux";
import scrolled from "./scrolledReducer";
import hamClicked from "./hamClickedReducer";
import name from "./nameReducer";
import email from "./emailReducer";
import phone from "./phoneReducer";
import message from "./messageReducer";

const rootReducer = combineReducers({
  scrolled,
  hamClicked,
  name,
  email,
  phone,
  message,
});

export default rootReducer;
