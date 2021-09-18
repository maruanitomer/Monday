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
import { MainNav } from "../../index";
import emptypage from "../../../assets/imgs/emptypage.png";
import { userService } from "../../user/service/userService";
import { utilService } from "../../../shared";
import { activitesActions } from "../../../shared/services/activitiesActions";

export const Board = ({ match }) => {
  const [modal, setModal] = useState(false);
  const { currBoard, boards } = useSelector((state) => state.boardModule);
  const dispatch = useDispatch();
  const [toggleUpdates, setToggleUpdates] = useState(false);
  const [task, setTask] = useState();
  const [filter, setFilter] = useState(null);
  const [user] = useState(userService.getLoggedinUser());




  useEffect(() => {
    if (!user)
      window.location.assign(
        '/sign'
      )
  }, [user]);

  OnSetBoards(filter);

  useEffect(() => {
    const getBoard = async () => {
      if (boards && boards.length !== 0) {
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
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "40vw",
      height: "40vh",
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
  const onEditBoard = async (action) => {
    // UPDATING THE BOARD (SERVER + STORE)
    if (action) {

      if (!currBoard.activities) currBoard.activities = []

      switch (action.type) {
        case activitesActions.REMOVE_TASK:
          currBoard.activities.unshift({ id: utilService.makeId(), text: `${user.username} has removed the task - ${action.task.title}` })
          break;
        case activitesActions.ADD_TASK:
          currBoard.activities.unshift({ id: utilService.makeId(), text: `${user.username} has added the task - ${action.task.title}` })
          break;
        case activitesActions.REMOVE_GROUP:
          currBoard.activities.unshift({ id: utilService.makeId(), text: `${user.username} has removed the group - ${action.group.title}` })
          break;
        case activitesActions.ADD_GROUP:
          currBoard.activities.unshift({ id: utilService.makeId(), text: `${user.username} has added new group` })
          break;
        default:
          break;
      }
    }

    boardService.edit(currBoard._id, currBoard).then((res) => {
      dispatch(editBoard(res));
    }).catch(err => console.log(err))
  };
  const onOpenUpdates = (task) => {
    setTask(task);
    setToggleUpdates(true);
  };
  // var className;
  // toggleUpdates? className="50%" : className="100%";

  return (
    <div className="board-layout flex">
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
      <MainNav />

      <BoardSideBar toggleModal={toggleModal} boards={boards} setFilter={setFilter}></BoardSideBar>
      {boards && boards.length > 0 ? (
        <div className="flex">
          <div className="board-container flex column ">
            <BoardHeader
              board={currBoard}
              onEditBoard={onEditBoard}
            ></BoardHeader>
            {currBoard && (
              <BoardPreview
                onEditBoard={onEditBoard}
                board={currBoard}
                groups={currBoard.groups}
                onOpenUpdates={onOpenUpdates}
                toggleUpdates={toggleUpdates}
              />
            )}
            {toggleUpdates && (
              <TaskUpdates
                task={task}
                onEditBoard={onEditBoard}
                close={() => setToggleUpdates(false)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="emptypage-logo-wrapper">
          <div className="emptypage-img-container">
            <img src={emptypage} alt="icon"></img>
          </div>
        </div>
      )
      }
    </div >
  );
};
