import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { useHistory } from "react-router";

export const BoardListPreview = ({ board, onRemoveBoard, boardId, boards }) => {
  const history = useHistory();

  let className = "flex align-center side-bar-btns-width";
  let spanAndIconClassName = "";
  if (!boardId) boardId = boards[0]._id;
  if (boardId === board._id) {
    className += " active";
    spanAndIconClassName += " span-active";
  }

  return (
    <div key={board._id}>
      <Link to={`/board/${board._id}`}>
        <button className={className}>
          <DashboardOutlinedIcon
            className={spanAndIconClassName}
          ></DashboardOutlinedIcon>
          <span className={spanAndIconClassName}>{board.title}</span>
        </button>
      </Link>
      <MoreHorizIcon
        onClick={() => {
          history.push("/board");
          onRemoveBoard();
        }}
      ></MoreHorizIcon>
    </div>
  );
};
