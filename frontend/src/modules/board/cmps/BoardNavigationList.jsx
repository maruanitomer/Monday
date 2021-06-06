
import { removeBoard } from "../../../store/actions/boardActions";
import { boardService } from "../service/boardService";
import { useDispatch } from "react-redux";
import { BoardNavigationPreview } from "./BoardNavigationPreview";

export const BoardNavigationList = ({ boards }) => {
  const dispacth = useDispatch();

  const onRemoveBoard = (boardId) => {
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
    <div className="board-list-navigate-wrapper">
      <div className="spacer"></div>
      {boards && (
        <div className="board-list-container flex column align-start ">
          {boards.map((board) => {
            return (
              <BoardNavigationPreview
                key={board._id}
                board={board}
                boards={boards}
                onRemoveBoard={onRemoveBoard}
              ></BoardNavigationPreview>
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
