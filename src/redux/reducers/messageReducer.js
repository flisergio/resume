import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function messageReducer(state = initialState.message, action) {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return action.message;
    default:
      return state;
  }
}
