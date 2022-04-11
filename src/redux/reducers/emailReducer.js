import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function emailReducer(state = initialState.email, action) {
  switch (action.type) {
    case types.UPDATE_EMAIL:
      return action.email;
    default:
      return state;
  }
}
