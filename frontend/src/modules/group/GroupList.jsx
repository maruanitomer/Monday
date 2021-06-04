import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onEditBoard } from "../board/hooks/setBoards";
import { TaskList } from "../task/cmps/TaskList";
import { utilService } from "../../services/utilService";
export const GroupList = ({ groups, board }) => {
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
  const onAddTask = (task, group) => {
    const copyTask = {...task};
    copyTask._id = utilService.makeId();
    group.tasks.push(task);
    onEditBoard(dispatch, board);
  };

  const inputHandler = (ev) => {
    const { value } = ev.target;
    const targetName = ev.target.name;
    const taskCopy = { ...task };
    taskCopy[targetName] = value;
    SetTask({ ...taskCopy });
  };
  return (
    <section className="group-list-wrapper">
      {groups &&
        groups.map((group) => {
          return (
            <div key={group._id}>
              <div className="grid-tasks-layout">
                <span className="title">{group.title}</span>
                <span className="person">Person</span>
                <span className="status">Status</span>
                <span className="date">Date</span>
              </div>
              <TaskList tasks={group.tasks} />
              <input
                onChange={inputHandler}
                type="text"
                placeholder="Add + "
                name="title"
              />
              <button onClick={() => onAddTask(task, group)}>Add</button>
            </div>
          );
        })}
    </section>
  );
};
