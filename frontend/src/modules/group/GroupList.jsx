import React from "react";
import { TaskList } from "../task/cmps/TaskList";

export const GroupList = ({ groups }) => {
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
              {/* <hr/> */}
              <TaskList tasks={group.tasks} />
            </div>
          );
        })}
      <input type="text" placeholder="Add + " />
    </section>
  );
};
