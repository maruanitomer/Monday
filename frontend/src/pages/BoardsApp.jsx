import React, { useEffect, useState, } from 'react'
import { loadBoards } from '../store/actions/boardActions'
import { connect, useDispatch } from 'react-redux';
import { BoardList } from '../cmps/BoardList';
import { BoardPreview } from '../cmps/BoardPreview';
import { boardService } from '../services/boardService';

const _BoardsApp = ({ loadBoards, boards, match }) => {
    const dispatch = useDispatch()
    const [board, setBoard] = useState(null)
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
    }, [loadBoards, dispatch])

    useEffect(() => {
        (async () => {
            const boardId = match.params.boardId;
            if (boardId) {
                var board = await boardService.getById(boardId)
            }
            else board = boards[0]
            setBoard(board)
        })()
    }, [boards,match.params])
    
    return (
        (boards) ?
        <div>
                <BoardList boards={boards}></BoardList>
                {(board) ? <BoardPreview board={board} /> : <p>Select board</p>}
            </div> :
            <h1>loading</h1>
    )
}

const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardModule.boards

    }
}
const mapDistpatchToProps = {
    loadBoards,

}
export const BoardsApp = connect(mapGlobalStateToProps, mapDistpatchToProps)(_BoardsApp)