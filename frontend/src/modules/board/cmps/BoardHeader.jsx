import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import FiberPinOutlinedIcon from "@material-ui/icons/FiberPinOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import HeightIcon from "@material-ui/icons/Height";
import ReorderTwoToneIcon from "@material-ui/icons/ReorderTwoTone";
import FormatColorFillSharpIcon from "@material-ui/icons/FormatColorFillSharp";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { useDispatch } from "react-redux";
import { boardService } from "../service/boardService";
import { editBoard } from "../../../store/actions/boardActions";
import { utilService } from "../../../shared/services/utilService";

export const BoardHeader = ({ board }) => {
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
  const onAddGroup = () => {
    const group = {
      _id: utilService.makeId(),
      title: "New Group",
      tasks: [],
    };
    board.groups.unshift(group);
    console.log("Board");
    console.log(board);
    EditBoard();
  };

  return board ? (
    <section className="board-header-content-wrapper flex column">
      <div
        className="head flex justify-space-between align-center"
        style={{ width: "80vw" }}
      >
        <h2>{board.title}</h2>
        <div className="flex justify-space-between" style={{ width: "440px" }}>
          <button className="flex align-center">
            {" "}
            Last seen <AccountCircleIcon></AccountCircleIcon>
          </button>
          <button className="flex align-center">
            {" "}
            Invite / <PersonOutlineIcon></PersonOutlineIcon>
          </button>
          <button className="flex align-center">
            Activity <TrendingUpIcon></TrendingUpIcon>{" "}
          </button>
          <button>+ Add to Board</button>
          <button>
            <MoreHorizIcon></MoreHorizIcon>
          </button>
        </div>
      </div>
      <input
        style={{ border: "none", margin: "10px 10px 10px 0px" }}
        placeholder="Add board description"
      />
      <div
        className="flex justify-space-between"
        style={{
          width: "80vw",
          borderBottom: "1px solid lightgrey",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{ width: "200px" }}
          className="flex justify-space-between align-center"
        >
          <button className="flex align-center">
            <HomeWorkOutlinedIcon></HomeWorkOutlinedIcon> Main Table
          </button>
          <span>|</span>
          <button>+ Add View</button>
        </div>
        <div className="flex">
          <div className="integrations-button-content flex">
            {/* <span>Icon</span> */}
            {/* <span>integrate</span> */}
            <div className="apps-badges-container">
              {/* <span>Icon</span>
                            <span>Icon</span>
                            <span>Icon</span> */}
            </div>
          </div>
          <div className="automations-button">
            {/* <button>Automate</button> */}
          </div>
          <div>{/* <button>(^)</button> */}</div>
        </div>
      </div>
      <div className="board-header-view-bar">
        <div className="monday-header flex">
          <button onClick={onAddGroup}>New Item</button>
          <button className="flex align-center ">
            <SearchOutlinedIcon></SearchOutlinedIcon> Search
          </button>
          <button className="flex align-center tooltip">
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>{" "}
            <span className="tooltiptext">Filter By Person</span> Person
          </button>
          <button className="flex align-center tooltip">
            <FilterListOutlinedIcon></FilterListOutlinedIcon>{" "}
            <span className="tooltiptext">Filter By Anything</span> Filter{" "}
          </button>
          <button className="flex align-center tooltip">
            <ImportExportIcon></ImportExportIcon>{" "}
            <span className="tooltiptext">Sort By Any Column</span> Sort{" "}
          </button>
          <button className="flex align-center tooltip">
            <FiberPinOutlinedIcon></FiberPinOutlinedIcon>{" "}
            <span className="tooltiptext">Pin Columns</span>{" "}
          </button>
          <button className="flex align-center tooltip">
            <VisibilityOffOutlinedIcon></VisibilityOffOutlinedIcon>{" "}
            <span className="tooltiptext">Hidden Columns</span>{" "}
          </button>
          <button className="flex align-center tooltip">
            <HeightIcon></HeightIcon>
            <ReorderTwoToneIcon
              style={{ marginLeft: "-0.6rem" }}
            ></ReorderTwoToneIcon>{" "}
            <span className="tooltiptext">Item Height</span>
          </button>
          <button className="flex align-center tooltip">
            <FormatColorFillSharpIcon></FormatColorFillSharpIcon>{" "}
            <span className="tooltiptext">Condittional coloring</span>
          </button>
          <button className="flex align-center tooltip">
            <BorderColorOutlinedIcon></BorderColorOutlinedIcon>
            <span className="tooltiptext">Item default values</span>
          </button>
        </div>
      </div>
    </section>
  ) : (
    <div>loading</div>
  );
};
