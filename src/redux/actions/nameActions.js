import * as types from "./actionTypes";

export function updateName(name) {
  return { type: types.UPDATE_NAME, name };
}
