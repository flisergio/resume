import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function phoneReducer(state = initialState.phone, action) {
  switch (action.type) {
    case types.UPDATE_PHONE:
      return action.phone;
    default:
      return state;
  }
}
