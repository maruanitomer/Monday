import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardPreview } from "../cmps/BoardPreview";
import { BoardSideBar } from "../cmps/BoardSideBar";
import { PopUpModal } from "../../../shared/cmps/PopUpModal";
import { BoardAdd } from "../cmps/BoardAdd";
import { makeStyles } from "@material-ui/core";
import { BoardHeader } from "../cmps/BoardHeader";
import { OnSetBoards } from "../cmps/SetBoardEffect";
import { boardService } from "../service/boardService";
import { addBoard } from "../../../store/actions/boardActions";
import { BoardNav } from "../cmps/BoardNav";

export const Board = ({ match }) => {
  const [board, setBoard] = useState(null);
  const [modal, setModal] = useState(false);
  const { boards } = useSelector((state) => state.boardModule);
  const dispatch = useDispatch();

  OnSetBoards();

  useEffect(() => {
    const getBoard = async () => {
      let board = { ...boards[0] };
      let boardId = match.params.boardId;
      try {
        if (boardId) {
          board = await boardService.getById(boardId);
        }
        setBoard(board);
      } catch (err) {
        console.log(err);
      }
    };
    getBoard();
  }, [boards, match.params]);

  const toggleModal = (ev) => {
    ev.stopPropagation();
    setModal(!modal);
  };

  //Modal Generic CSS
  const useStyles = makeStyles({
    popup: {
      backgroundColor: "white",
      position: "relative",
      top: "25%",
      left: "25%",
      width: "35vw",
      height: "35vh",
    },
  });
  const classes = useStyles();

  //Adding new Board
  const onAddBoard = async (board, ev) => {
    ev.stopPropagation();
    // onSaveBoard(dispatch, board);
    try {
      const res = await boardService.save(board);
      dispatch(addBoard(res));
      toggleModal(ev);
    } catch (err) {
      console.log(err);
    }
  };

  return boards ? (
    <div className="board-layout flex">
      <div className="board-wrapper flex coulmn">
        <BoardNav />
        {modal && (
          <PopUpModal
            toggleModal={toggleModal}
            popup={classes.popup}
            isDark={true}
          >
            <BoardAdd
              types={[
                "Employees",
                "Campaigns",
                "Projects",
                "Creatives",
                "Clients",
                "Tasks",
              ]}
              onAdd={onAddBoard}
              toggleModal={toggleModal}
            />
          </PopUpModal>
        )}
        <BoardSideBar
          boardId={board && board._id}
          toggleModal={toggleModal}
          boards={boards}
        ></BoardSideBar>
        <div className="board-container flex column">
          <BoardHeader board={board}></BoardHeader>
          {board && <BoardPreview board={board} groups={board.groups} />}
        </div>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};
