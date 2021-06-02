import { types } from '../reducers/boardReducer'

export const loadBoards =  (boards) => ({
    type: types.SET_BOARDS
    , boards
})
export const addBoard = (board) => (
    {
        type: types.ADD_BOARD
        , board
    }
)




        // export function removeBoard(BoardId) {
        //     return (dispatch) => {
        //         return BoardService.remove(BoardId)
        //             .then(() => {
        //                 const action = {
        //                     type: 'REMOVE_Board',
        //                     BoardId
        //                 }
        //                 dispatch(action)
        //             })
        //     }
        // }
        // export function editBoard(Board) {
        //     return (dispatch) => {
        //         return BoardService.save(Board)
        //             .then(Board => {
        //                 const action = {
        //                     type: 'EDIT_Board',
        //                     Board
        //                 }
        //                 dispatch(action)
        //             })
        //     }
        // }
        // export function setFilter(filterBy) {
        //     return (dispatch) => {
        //         const action = {
        //             type: 'SET_FILTER',
        //             filterBy
        //         }
        //         dispatch(action)
        //     }
