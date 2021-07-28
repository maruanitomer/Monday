const initialState = {
  isStatusPopUpOpen: false,
};
export const types = {
  TOGGLE_STATUS_POPUP: "TOGGLE_STATUS_POPUP",
};
export function popUpReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_STATUS_POPUP:
      return { ...state, isStatusPopUpOpen: !action.type };
    default:
      return state;
  }
}
