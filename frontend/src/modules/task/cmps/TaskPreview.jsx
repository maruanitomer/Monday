import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Status } from "./Status";
import { Popper } from "../../../shared/cmps/Popper";
export const TaskPreview = ({ task, onRemoveTask, onEditBoard }) => {
  const onEditStatus = (text, color) => {
    task.status.text = text;
    task.status.color = color;
    onEditBoard();
  };

  return (
    <div>
      <section className="task-preview-container grid-tasks-layout">
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
          <div className="flex align-center justify-center">
            <ChatBubbleOutlineRoundedIcon />
          </div>
        </div>
        <button className="members flex justify-center aling-center">
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
        <button className="date flex justify-center align-center">
          <input type="date" />
          {/* <span>{parseInt(Math.floor(Math.random() * 31))} May</span> */}
        </button>
        <div className="end flex justify-space-between">
          <div className="start-end"></div>
          <div className="block-end"></div>
        </div>
      </section>
    </div>
  );
};
