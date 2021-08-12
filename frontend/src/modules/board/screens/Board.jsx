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
import {
  addBoard,
  editBoard,
  loadBoard,
} from "../../../store/actions/boardActions";
import { TaskUpdates } from "../../task/cmps/TaskUpdates";

export const Board = ({ match }) => {
  const [modal, setModal] = useState(false);
  const { currBoard, boards } = useSelector((state) => state.boardModule);
  const dispatch = useDispatch();
  const [toggleUpdates, setToggleUpdates] = useState(false);
  const [task, setTask] = useState();

  OnSetBoards();

  useEffect(() => {
    const getBoard = async () => {
      if (boards.length !== 0) {
        try {
          let boardId = match.params.boardId;
          if (boardId && (!currBoard || boardId !== currBoard._id)) {
            const board = await boardService.getById(boardId);
            dispatch(loadBoard(board));
          } else if (!currBoard) dispatch(loadBoard(boards[0]));
        } catch (err) {
          console.log(err);
        }
      }
    };
    getBoard();
  }, [boards, match.params, dispatch, currBoard]);

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
    try {
      const res = await boardService.save(board);
      dispatch(addBoard(res));
      toggleModal(ev);
    } catch (err) {
      console.log(err);
    }
  };
  const onEditBoard = async () => {
    try {
      // UPDATING THE BOARD (SERVER + STORE)
      const res = await boardService.edit(currBoard._id, currBoard);
      dispatch(editBoard(res));
    } catch (err) {
      console.log(err);
    }
  };
  const onOpenUpdates = (task) => {
    setTask(task);
    setToggleUpdates(true);
  };
  return (
    <div className="board-layout flex">
      <div className="board-wrapper flex coulmn">
        {modal && (
          <PopUpModal
            toggleModal={toggleModal}
            popup={classes.popup}
            isDark //isDark={True}
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
        <BoardSideBar toggleModal={toggleModal} boards={boards}></BoardSideBar>
        {boards.length !== 0 ? (
          <div className="flex">
            <div className="board-container flex column">
              <BoardHeader board={currBoard}></BoardHeader>
              {currBoard && (
                <BoardPreview
                  onEditBoard={onEditBoard}
                  board={currBoard}
                  groups={currBoard.groups}
                  onOpenUpdates={onOpenUpdates}
                />
              )}
            </div>
            {toggleUpdates && (
              <TaskUpdates
                task={task}
                onEditBoard={onEditBoard}
                close={() => setToggleUpdates(false)}
              />
            )}
          </div>
        ) : (
      <h1>No Boards</h1>

        
        )}
      </div>
    </div>
  );
};
