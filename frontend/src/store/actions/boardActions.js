import { boardService } from "../../services/boardService"


export async function loadBoards() {
    try {
        const boards = await boardService.query()
        const action = {
            type: 'SET_BOARDS',
            boards
        }
        return action
    }
    catch (err) { throw err }
}

export function addBoard(board) {
    return boardService.save(board)
        .then(board => {
            const action = {
                type: 'ADD_BOARD',
                board
            }
            return action
        })

}
// export function setCurrBoard(boardId) {
//     return async () => {
//         try {
//             const currBoard = await boardService.getById(boardId)
//             const action = {
//                 type: 'SET_CURRENT_BOARD',
//                 currBoard
//             }
//             return action
//         }
//         catch (err) { throw err }
//     }
// }


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
