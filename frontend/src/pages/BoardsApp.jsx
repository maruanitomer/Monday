import React, { useEffect, useState, } from 'react'
import { loadBoards } from '../store/actions/boardActions'
import { useDispatch, useSelector } from 'react-redux';
import { BoardPreview } from '../cmps/BoardPreview';
import { boardService } from '../services/boardService';
import { BoardHeader } from '../cmps/BoardHeader';
import { BoardSideBar } from '../cmps/BoardSideBar';

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
            <div className="board-layout flex">
                <BoardSideBar boards={boards}></BoardSideBar>
                <div className="board-container flex column">
                    <BoardHeader></BoardHeader>
                    {(board) ? <BoardPreview board={board} /> : <p>Select board</p>}
                </div>
            </div> :
            <h1>loading</h1>
    )
}
