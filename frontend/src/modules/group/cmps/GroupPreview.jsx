import { TaskList } from "../../task";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import { Popper } from "../../../shared/cmps/Popper";
import { useState } from "react";
import { useClickOutside } from "../../../shared/hooks/clickOutSide";
export const GroupPreview = ({ group, board, onEditBoard }) => {
  const onRemoveGroup = (id) => {
    //REMOVE Group
    console.log("Deleting group...");
    board.groups = board.groups.filter((group) => group._id !== id);
    onEditBoard();
  };

  const [toggleName, setToggleName] = useState(true);
  const [groupTitle, setGroupTitle] = useState(group.title);
  const inputHandler = (ev) => {
    setGroupTitle(ev.target.value);
  };
  let domNode = useClickOutside(() => {
    if (toggleName === false) {
      setToggleName(true);
      if (group.title !== groupTitle) {
        console.log("Changing group title...");
        group.title = groupTitle;
        onEditBoard();
      }
    }
  });

  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="grid-tasks-layout" style={{ marginBottom: "5px" }}>
        <Popper
          button={<FormatAlignLeftIcon />}
          popper={
            <div className="flex column " style={{ backgroundColor: "salmon" }}>
              <button
                onClick={(ev) => {
                  ev.stopPropagation();
                  onRemoveGroup(group._id);
                }}
              >
                Delete
              </button>
              <button>Rename</button>
            </div>
          }
        />
        <div ref={domNode}>
          {toggleName ? (
            <span
              className="group-title"
              onClick={() => setToggleName(!toggleName)}
            >
              {groupTitle}
            </span>
          ) : (
            <div>
              <input
                className="group-title-edit"
                type="text"
                name="title"
                onChange={inputHandler}
                value={groupTitle}
              />
            </div>
          )}
        </div>
        <span className="person">Person</span>
        <span className="status">Status</span>
        <span className="date">Date</span>
      </div>
      <TaskList
        board={board}
        onEditBoard={onEditBoard}
        group={group}
        tasks={group.tasks}
      />
    </div>
  );
};
