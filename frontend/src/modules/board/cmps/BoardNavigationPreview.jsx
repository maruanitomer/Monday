import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { useHistory, useParams } from "react-router";

export const BoardNavigationPreview = ({
  board,
  onRemoveBoard,
  boards,
  match,
}) => {
  const history = useHistory();
  let { boardId } = useParams();
  if (!boardId) boardId = boards[0]._id;

  //added class for scss
  let className = "flex justify-space-between align-center side-bar-btns-width";
  let spanAndIconClassName = "";
  if (boardId === board._id) {
    className += " active";
    spanAndIconClassName += " span-active";
  }

  return (
    <section className={"board-list-navigate-preview-wrapper " + className}>
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
          onRemoveBoard(board._id);
        }}
      ></MoreHorizIcon>
    </section>
  );
};
