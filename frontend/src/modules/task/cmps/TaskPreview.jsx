import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useState } from "react";

export const TaskPreview = ({ task, onRemoveTask }) => {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const onToggleStatusModal = () => {
    setIsStatusModalOpen(!isStatusModalOpen);
  };
  const onEditStatus = (text, color) => {
    task.status.text = text;
    task.status.color = color;
  };

  // let {styles , attribute } = usePopper ()

  return (
    <>
      <button onClick={() => onRemoveTask(task._id)}>Delete</button>
      <div>
        <section className="task-preview-container grid-tasks-layout">
          <div className="task-option-btn-container">
            <ExpandMoreRoundedIcon className="task-option-btn" />
          </div>
          <div className="flex justify-space-between">
            <span className="task-title">{task.title}</span>
            <div className="flex align-center justify-center">
              <ChatBubbleOutlineRoundedIcon />
            </div>
          </div>
          <button className="members flex justify-center aling-center">
            <AccountCircleIcon />
          </button>
          <div
            onClick={onToggleStatusModal}
            style={{ backgroundColor: task.status.color, color: "#ffffff" }}
            className="main-status flex justify-center aling-center"
          >
            <span>{task.status.text}</span>
          </div>
          <button className="date flex justify-center align-center">
            {/* <input type="date" /> */}
            <span>{parseInt(Math.floor(Math.random() * 31))} May</span>
          </button>
          <div className="end flex justify-space-between">
            <div className="start-end"></div>
            <div className="block-end"></div>
          </div>
        </section>
        {isStatusModalOpen && (
          <div
            className="chnage-status-wrapper grid-tasks-layout"
            hidden={"true"}
          >
            <div className="chnage-status-container flex column align-center">
              <div
                className="status"
                onClick={() => {
                  onToggleStatusModal();
                  onEditStatus("done", "#33d391");
                }}
                style={{ backgroundColor: "#33d391" }}
              >
                Done
              </div>
              <div
                className="status"
                onClick={() => {
                  onToggleStatusModal();
                  onEditStatus("working on it", "#fec06e");
                }}
                style={{ backgroundColor: "#fec06e" }}
              >
                Woriking on it!
              </div>
              <div
                className="status"
                onClick={() => {
                  onToggleStatusModal();
                  onEditStatus("stuck", "#e2445c");
                }}
                style={{ backgroundColor: "#e2445c" }}
              >
                Stuck
              </div>

              <div
                className="status"
                onClick={() => {
                  onToggleStatusModal();
                  onEditStatus("Not status yet", "#c4c4c4");
                }}
                style={{ backgroundColor: "#c4c4c4", borderStyle: "dotted" }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
