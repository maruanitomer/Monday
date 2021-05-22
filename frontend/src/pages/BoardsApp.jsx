import React, { useEffect, useState, } from 'react'
import { addBoard, loadBoards } from '../store/actions/boardActions'
import { useDispatch, useSelector } from 'react-redux';
import { BoardPreview } from '../cmps/BoardPreview';
import { boardService } from '../services/boardService';
import { BoardHeader } from '../cmps/BoardHeader';
import { BoardSideBar } from '../cmps/BoardSideBar';
import { PopUpModal } from '../cmps/PopUpModal'
import { BoardAdd } from '../cmps/BoardAdd';
import { makeStyles } from '@material-ui/core';


export const BoardsApp = ({ match }) => {
    const dispatch = useDispatch()
    const [board, setBoard] = useState(null)
    const { boards } = useSelector(state => state.boardModule)
    const [modal, setModal] = useState(false)
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
    const toggleModal = (ev) => {
        ev.stopPropagation()
        setModal(!modal);
    }
    //Modal Generic CSS
    const useStyles = makeStyles({
        popup: {
            backgroundColor: 'white',
            position: 'relative',
            top: '25%',
            left: '25%',
            width: '35vw',
            height: '35vh'

        }
    })
    const classes = useStyles();

    //Adding new Board
    const onAddBoard = async (board, ev) => {
        ev.stopPropagation();
        const action = await addBoard(board);
        dispatch(action)
        toggleModal(ev)
    }
    return (
        (boards) ?
            <div className="board-layout flex">
                {modal && <PopUpModal toggleModal={toggleModal} popup={classes.popup}><BoardAdd onAdd={onAddBoard} toggleModal={toggleModal} /></PopUpModal>}
                <BoardSideBar toggleModal={toggleModal} boards={boards}></BoardSideBar>
                <div className="board-container flex column">
                    <BoardHeader board={board}></BoardHeader>
                    {(board) ? <BoardPreview board={board} /> : <p>Select board</p>}
                </div>
            </div> :
            <h1>loading</h1>
    )
}
