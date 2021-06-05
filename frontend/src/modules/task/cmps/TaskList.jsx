import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { utilService } from "../../../shared/services/utilService";
import { editBoard } from "../../../store/actions/boardActions";
import { boardService } from "../../board/service/boardService";
import { TaskPreview } from "./TaskPreview";

export const TaskList = ({ tasks, board, group }) => {
  const dispatch = useDispatch();
  const [task, SetTask] = useState({
    title: "",
    comments: [],
    members: [],
    status: {
      text: "Not status yet",
      color: "#cccccc",
    },
    priority: {
      text: "Set Piority",
      color: "#cccccc",
    },
    dueDate: {
      start: "",
      end: "",
    },
  });
  const inputHandler = (ev) => {
    const { value } = ev.target;
    const targetName = ev.target.name;
    const taskCopy = { ...task };
    taskCopy[targetName] = value;
    SetTask({ ...taskCopy });
  };
  const onAddTask = (task, group) => {
    const copyTask = { ...task };
    copyTask._id = utilService.makeId();
    group.tasks.push(task);
    const onEditBoard = async () => {
      try {
        const res = await boardService.edit(board._id, board);
        dispatch(editBoard(res));
      } catch (err) {
        console.log(err);
      }
    };
    onEditBoard();
  };
  return (
    <section className="task-wrapper">
      {tasks.map((task) => {
        return <TaskPreview key={task._id} task={task} />;
      })}
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Add + "
        name="title"
      />
      <button onClick={() => onAddTask(task, group)}>Add</button>
    </section>
  );
};
