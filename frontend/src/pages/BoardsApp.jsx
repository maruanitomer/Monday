import React, { useEffect, useState, } from 'react'
import { loadBoards } from '../store/actions/boardActions'
import { connect, useDispatch, useSelector } from 'react-redux';
import { BoardList } from '../cmps/BoardList';
import { BoardPreview } from '../cmps/BoardPreview';
import { boardService } from '../services/boardService';


export const BoardsApp = ({ match }) => {
    const dispatch = useDispatch()
    const [board, setBoard] = useState(null)
    const { boards } = useSelector(state => state.boardModule)

    useEffect(() => {
        (async () => {
            try {
                const action = await loadBoards();
                dispatch(action)
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, [dispatch])

    useEffect(() => {
        (async () => {
            const boardId = match.params.boardId;
            if (boardId) {
                var board = await boardService.getById(boardId)
            }
            else board = boards[0]
            setBoard(board)
        })()
    }, [boards, match.params])

    return (
        (boards) ?
            <div>
                <BoardList boards={boards}></BoardList>
                {(board) ? <BoardPreview board={board} /> : <p>Select board</p>}
            </div> :
            <h1>loading</h1>
    )
}
