
import { boardService } from '../../../services/boardService'
import { loadBoards } from '../../../store/actions/boardActions'



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
