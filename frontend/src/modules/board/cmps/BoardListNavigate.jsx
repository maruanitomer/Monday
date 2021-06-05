
import { removeBoard } from "../../../store/actions/boardActions";
import { boardService } from "../service/boardService";
import { useDispatch } from "react-redux";
import { BoardListNavigatePreview } from "./BoardListNavigatePreview";

export const BoardListNavigate = ({ boards, boardId }) => {
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
    <div className="board-list-navigate-wrapper">
      <div className="spacer"></div>
      {boards && (
        <div className="board-list-container flex column align-start ">
          {boards.map((board) => {
            return (
              <BoardListNavigatePreview
                key={board._id}
                board={board}
                boardId={boardId}
                boards={boards}
                onRemoveBoard={onRemoveBoard}
              ></BoardListNavigatePreview>
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
