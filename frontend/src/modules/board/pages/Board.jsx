import React, { useEffect, useState } from "react";
import { addBoard } from "../../../store/actions/boardActions";
import { useDispatch, useSelector } from "react-redux";
import { BoardPreview } from "../cmps/BoardPreview";
import { BoardSideBar } from "../cmps/BoardSideBar";
import { PopUpModal } from "../../../shared/cmps/PopUpModal";
import { BoardAdd } from "../cmps/BoardAdd";
import { makeStyles } from "@material-ui/core";
import { getBoard, onSaveBoard, onSetBoards } from "../hooks/setBoards";
import { BoardHeader } from "../cmps/BoardHeader";

export const Board = ({ match }) => {
  const [board, setBoard] = useState(null);
  const [modal, setModal] = useState(false);
  const { boards } = useSelector((state) => state.boardModule);
  const dispatch = useDispatch();

  useEffect(() => {
    onSetBoards(dispatch);
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        setBoard(await getBoard(match.params.boardId, boards));
      } catch (err) {
        throw err;
      }
    })();
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
    onSaveBoard(dispatch, board);
    toggleModal(ev);
  };

  return boards ? (
    <div className="board-layout flex">
      {modal && (
        <PopUpModal toggleModal={toggleModal} popup={classes.popup}>
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
        {board && <BoardPreview board={board} />}
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};
