const initialState = {
    boards: [],
    currBoard: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'EDIT_BOARDS':
            return { ...state, boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board) }
        case 'SET_CURRENT_BOARD':
            return { ...state, currBoard: action.currBoard }
        case 'ADD_BOARD':
            return { ...state, boards: [action.board, ...state.boards] }
        case 'REMOVE_BOARD':
            return { ...state, boards: state.boards.filter(board => board._id !== action.boardId) }
        default:
            return state
    }
}