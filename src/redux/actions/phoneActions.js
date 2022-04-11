import * as types from "./actionTypes";

export function updatePhone(phone) {
  return { type: types.UPDATE_PHONE, phone };
}
