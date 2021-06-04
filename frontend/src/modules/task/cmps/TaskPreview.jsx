import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const TaskPreview = ({ task }) => {
  return (
    <section key={task._id} className="task-preview-container grid-tasks-layout">
      <div className="task-option-btn-container">
        <ExpandMoreRoundedIcon className="task-option-btn"></ExpandMoreRoundedIcon>
      </div>
      <div className="flex justify-space-between">
        {task.members.map((member) => {
          return (
            <span className="task-title" key={member._id}>
              {member.fullname}
            </span>
          );
        })}
        <div className="flex align-center justify-center">
          <ChatBubbleOutlineRoundedIcon></ChatBubbleOutlineRoundedIcon>
        </div>
      </div>
      <button className="members flex justify-center aling-center">
        <AccountCircleIcon></AccountCircleIcon>
      </button>
      <button
        style={{ backgroundColor: task.status.color }}
        className="status flex justify-center aling-center"
      >
        <span>{task.status.text}</span>
      </button>
      <button className="date flex justify-center align-center">
        {/* <input type="date" /> */}
        <span>23 May</span>
      </button>
      <div className="end flex justify-space-between">
        <div className="start-end"></div>
        <div className="block-end"></div>
      </div>
    </section>
  );
};
