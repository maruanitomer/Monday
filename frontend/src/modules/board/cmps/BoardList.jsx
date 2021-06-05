// import { Link } from "react-router-dom";
// import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { removeBoard } from "../../../store/actions/boardActions";
import { boardService } from "../service/boardService";
import { useDispatch } from "react-redux";
import { BoardListPreview } from "./BoardListPreview";

export const BoardList = ({ boards, boardId }) => {
  const dispacth = useDispatch();

  const onRemoveBoard = () => {
    const remove = async () => {
      try {
        const res = await boardService.remove(boardId);
        dispacth(removeBoard(res));
      } catch (err) {
        console.log(err);
      }
    };
    remove();
  };

  return (
    <div className="board-list-wrapper">
      <div className="spacer"></div>
      {boards && (
        <div className="board-list-container flex column align-start ">
          {boards.map((board) => {
            return (
              <BoardListPreview
                key={board._id}
                board={board}
                boardId={boardId}
                boards={boards}
                onRemoveBoard={onRemoveBoard}
              ></BoardListPreview>
            );
          })}
        </div>
      )}
      {!boards && (
        <div className="flex column" style={{ padding: "10px" }}>
          <span>Workspace is empty</span>
          <span>Create or add boards</span>
        </div>
      )}
    </div>
  );
};
