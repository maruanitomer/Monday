import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { useHistory } from "react-router";

export const BoardListPreview = ({ board, onRemoveBoard, boardId, boards }) => {
  const history = useHistory();

  let className = "flex justify-space-between align-center side-bar-btns-width";
  let spanAndIconClassName = "";
  if (!boardId) boardId = boards[0]._id;
  if (boardId === board._id) {
    className += " active";
    spanAndIconClassName += " span-active";
  }

  return (
    <section className={"board-list-preview-wrapper " + className}>
      <Link
        className={"link flex align-center" + spanAndIconClassName}
        to={`/board/${board._id}`}
      >
        <DashboardOutlinedIcon></DashboardOutlinedIcon>
        <span className={spanAndIconClassName}>{board.title}</span>
      </Link>
      <MoreHorizIcon
        className={"options-btn " + spanAndIconClassName}
        onClick={() => {
          history.push("/board");
          onRemoveBoard();
        }}
      ></MoreHorizIcon>
    </section>
  );
};
