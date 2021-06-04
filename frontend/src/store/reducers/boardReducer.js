const initialState = {
  boards: [],
};
export const types = {
  ADD_BOARD: "ADD_BOARD",
  SET_BOARDS: "SET_BOARDS",
  REMOVE_BOARD: "REMOVE_BOARD",
  EDIT_BOARD: "EDIT_BOARD",
};

export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_BOARDS:
      return { ...state, boards: action.payload };
    case types.EDIT_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board._id === action.payload ? action.payload : board
        ),
      };
    case types.ADD_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case types.REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board._id !== action.payload),
      };
    default:
      return state;
  }
}
