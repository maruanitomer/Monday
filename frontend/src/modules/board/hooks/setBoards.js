
import { boardService } from '../../../services/boardService'
import { addBoard, loadBoards, removeBoard, editBoard } from '../../../store/actions/boardActions'



export const onSetBoards = async (dispatch) => {
    try {
        dispatch(loadBoards(await boardService.query()))
    }
    catch (err) {
        console.log(err);
    }
}
export const getBoard = async (boardId, boards) => {
    try {
        if (boardId) {
            var board = await boardService.getById(boardId)
        }
        else board = boards[0]
        return board
    }
    catch (err) {
        console.log(err);
    }
}

export const onRemoveBoard = async (dispatch, id) => {
    try {
        dispatch(removeBoard(await boardService.remove(id)));
    }
    catch (err) {
    }
}
export const onSaveBoard = async (dispatch, board) => {
    try {
        const boardWithId = await boardService.save(board);
        dispatch(addBoard(boardWithId));
    }
    catch (err) {
    }
}
export const onEditBoard = async (dispatch, board) => {
    try {
        dispatch(editBoard(await boardService.edit(board._id, board)));
    }
    catch (err) {
    }
}