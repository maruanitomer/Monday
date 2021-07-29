import { TaskList } from "../../task";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import { useDispatch } from "react-redux";
import { boardService } from "../../board/service/boardService";
import { editBoard } from "../../../store/actions/boardActions";
import { Popper } from "../../../shared/cmps/Popper";
export const GroupPreview = ({ group, board }) => {
  const dispatch = useDispatch();
  const EditBoard = async () => {
    try {
      // UPDATING THE BOARD (SERVER + STORE)
      const res = await boardService.edit(board._id, board);
      dispatch(editBoard(res));
    } catch (err) {
      console.log(err);
    }
  };
  const onRemoveGroup = (id) => {
    //REMOVE Group
    console.log("Deleting group...");
    board.groups = board.groups.filter((group) => group._id !== id);
    EditBoard();
  };
  return (
    <div>
      <div className="grid-tasks-layout">
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
        <span className="title">{group.title}</span>
        <span className="person">Person</span>
        <span className="status">Status</span>
        <span className="date">Date</span>
      </div>
      <TaskList board={board} group={group} tasks={group.tasks} />
    </div>
  );
};
