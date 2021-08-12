import React, { useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { utilService } from "../../../shared/services/utilService";
import { TaskPreview } from "./TaskPreview";

export const TaskList = ({ tasks, group, onEditBoard, onOpenUpdates }) => {
  const initialTask = {
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
  };
  const addInput = useRef(null);
  const [taskToAdd, SetTaskToAdd] = useState(initialTask);
  const inputHandler = (ev) => {
    const { value } = ev.target;
    const targetName = ev.target.name;
    const taskCopy = { ...taskToAdd };
    taskCopy[targetName] = value;
    SetTaskToAdd({ ...taskCopy });
  };

  const onRemoveTask = (id) => {
    //REMOVE TASK
    group.tasks = group.tasks.filter((task) => task._id !== id);
    onEditBoard();
  };
  const onAddTask = () => {
    //ADD TASK
    const copyTask = { ...taskToAdd };
    copyTask._id = utilService.makeId();
    group.tasks.push(copyTask);
    onEditBoard();
    SetTaskToAdd(initialTask);
    addInput.current.value = "";
  };

  return (
    <section className="task-wrapper">
      <Droppable droppableId={group._id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, idx) => {
              return (
                <Draggable key={task._id} draggableId={task._id} index={idx}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TaskPreview
                        onOpenUpdates={onOpenUpdates}
                        onEditBoard={onEditBoard}
                        task={task}
                        onRemoveTask={onRemoveTask}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <div className="flex">
              <input
                onChange={inputHandler}
                type="text"
                placeholder="Add + "
                name="title"
                ref={addInput}
              />
              <button onClick={() => onAddTask()}>Add</button>
            </div>
          </div>
        )}
      </Droppable>
    </section>
  );
};
