import { boardService } from "../../services/boardService.js"


export function loadBoards() {
    return async (dispatch) => {
        try {
            const boards = await boardService.query()
            const action = {
                type: 'SET_BOARDS',
                boards
            }
            dispatch(action)
        }
        catch (err) { console.log(err); }
    }


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
    // export function addBoard(Board) {
    //     return (dispatch) => {
    //         return BoardService.save(Board)
    //             .then(Board => {
    //                 const action = {
    //                     type: 'ADD_Board',
    //                     Board
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
}