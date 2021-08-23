import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Status } from "./Status";
import { Popper } from "../../../shared/cmps/Popper";
export const TaskPreview = ({
  task,
  onRemoveTask,
  onEditBoard,
  onOpenUpdates,
}) => {
  const onEditStatus = (text, color) => {
    if (task.status.text === text && task.status.color === color) return;
    task.status = { text, color };
    onEditBoard();
  };

  return (
    <div>
      <div className="task-grid ">
        <Popper
          button={<ExpandMoreRoundedIcon />}
          popper={
            <div className="flex column" style={{ backgroundColor: "red" }}>
              <button onClick={() => onRemoveTask(task._id)}>Delete</button>
              <button>Rename</button>
            </div>
          }
        />
        <div className="flex justify-space-between">
          <span className="task-title">{task.title}</span>
          <div
            className="flex align-center justify-center"
            onClick={() => onOpenUpdates(task)}
          >
            <ChatBubbleOutlineRoundedIcon />
          </div>
        </div>
        <button className="members ">
          <AccountCircleIcon />
        </button>
        <Popper
          button={
            <div
              style={{ backgroundColor: task.status.color, color: "#ffffff" }}
              className="main-status flex justify-center aling-center"
            >
              <span>{task.status.text}</span>
            </div>
          }
          popper={
            <div className="chnage-status-container flex column align-center">
              <Status onEditStatus={onEditStatus} type={"Done"} clr={"#33d391"}>
                Done
              </Status>
              <Status
                onEditStatus={onEditStatus}
                type={"Working on it"}
                clr={"#fec06e"}
              >
                Working on it!
              </Status>
              <Status
                onEditStatus={onEditStatus}
                type={"Stuck"}
                clr={"#e2445c"}
              >
                Stuck
              </Status>
              <Status
                onEditStatus={onEditStatus}
                type={"Not status yet"}
                clr={"#c4c4c4"}
              >
                Not status yet
              </Status>
            </div>
          }
        />
        <div>
          <input type="date" />
        </div>
      </div>
    </div>
  );
};
