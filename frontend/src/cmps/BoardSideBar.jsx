import { BoardList } from "./BoardList"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export const BoardSideBar = ({ boards, toggleModal }) => {
    return (
        <section className="side-bar-container flex column">
            <div className="flex">
                {/* <img src="" alt="" /> */}
                <span>Main workspace</span>
            </div>
            <div>
                <button className="flex align-center" onClick={toggleModal}><AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> Add </button>
                <button className="flex align-center"><AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> Filters </button>
                <div className="flex">
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <BoardList boards={boards}></BoardList>
        </section>
    )
}