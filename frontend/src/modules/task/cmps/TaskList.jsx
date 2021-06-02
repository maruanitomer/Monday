import React from "react";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export const TaskList = ({ tasks }) => {
  return (
    <section className="task-wrapper">
      {tasks.map((task) => {
        return (
          <div className="task-container">
            <ExpandMoreRoundedIcon className="task-option-btn"></ExpandMoreRoundedIcon>
            <div className="flex justify-space-between">
              {task.members.map((member) => {
                return (
                  <span className="task-title" key={member._id}>
                    {member.fullname}
                  </span>
                );
              })}
              <ChatBubbleOutlineRoundedIcon></ChatBubbleOutlineRoundedIcon>
            </div>
          </div>
        );
      })}
    </section>
  );
};
