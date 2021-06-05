import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const TaskPreview = ({ task }) => {
  return (
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
        <AccountCircleIcon/>
      </button>
      <div
        style={{ backgroundColor: task.status.color }}
        className="status flex justify-center aling-center"
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
  );
};
