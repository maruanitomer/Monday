import React from "react";

import { TaskPreview } from "./TaskPreview";

export const TaskList = ({ tasks }) => {
  return (
    <section className="task-wrapper">
      {tasks.map((task) => {
        return <TaskPreview key={task._id} task={task} />;
      })}
    </section>
  )
};
