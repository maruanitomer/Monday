const initialState = {
  anchor: false,
};
export const types = {
  TOGGLE_ANCHOR: "TOGGLE_ANCHOR",
};
export function anchorReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_ANCHOR:
      return { ...state, anchor: !state.anchor };
    default:
      return state;
  }
}
