import React, { useRef, useState } from "react";
import { utilService } from "../../../shared/services/utilService";
import { TaskPreview } from "./TaskPreview";
import { useDispatch } from "react-redux";
import { boardService } from "../../board/service/boardService";
import { editBoard } from "../../../store/actions/boardActions";

export const TaskList = ({ tasks, board, group }) => {
  const dispatch = useDispatch();
  const addInput = useRef(null);
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
   const EditBoard = async () => {
  try {
    // UPDATING THE BOARD (SERVER + STORE)
    const res = await boardService.edit(board._id, board);
    console.log("Something");
    dispatch(editBoard(res));
  } catch (err) {
    console.log(err);
  }
};
  const onRemoveTask = (id) =>{
    //REMOVE TASK
    group.tasks =  group.tasks.filter((task) => task._id!==id)
     EditBoard();
  }
  const onAddTask = (task, group) => {
    //ADD TASK
    const copyTask = { ...task };
    copyTask._id = utilService.makeId();
    group.tasks.push(copyTask);
    EditBoard();
    addInput.current.value="";
  };
  return (
    <section className="task-wrapper">
      {tasks.map((task) => {
        return <TaskPreview key={task._id} task={task} onRemoveTask={onRemoveTask}/>;
      })}
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Add + "
        name="title"
        ref={addInput}
      />
      <button onClick={() => onAddTask(task, group)}>Add</button>
    </section>
  );
};
