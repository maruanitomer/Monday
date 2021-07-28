import { TaskList } from "../../task";
import { usePopper } from "react-popper";
import { useState } from "react";
import { Portal } from "../../../shared/hooks/Portal";
import { useClickOutside } from "../../../shared/hooks/clickOutSide";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

export const GroupPreview = ({ group, board }) => {
 
  const [refEl, setRefEl] = useState();
  const [popperEl, setpopperEl] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });
  let { styles, attributes } = usePopper(refEl, popperEl);
  return (
    <div>
      <div ref={domNode}>
        <button ref={setRefEl} onClick={() => setIsOpen(!isOpen)}>
        <ExpandMoreRoundedIcon/>
        </button>
      </div>
      <Portal>
        <div
          ref={setpopperEl}
          hidden={!isOpen}
          style={styles.popper}
          {...attributes.popper}
        >
          <li style={{backgroundColor: 'red'}}>Delete</li>
          <li style={{backgroundColor: 'red'}}>Rename</li>
          
        </div>
      </Portal>
      <div className="grid-tasks-layout">
        <span className="title">{group.title}</span>
        <span className="person">Person</span>
        <span className="status">Status</span>
        <span className="date">Date</span>
      </div>
      <TaskList board={board} group={group} tasks={group.tasks} />
    </div>
  );
};
