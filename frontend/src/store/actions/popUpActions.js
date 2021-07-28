import { types } from "../reducers/boardReducer";

export const toggleStatusPopUp = (payload) => ({
  type: types.TOGGLE_STATUS_POPUP,
  payload,
});
