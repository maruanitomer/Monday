import { BoardList } from "./BoardList"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/Home';


export const BoardSideBar = ({ boards, toggleModal, boardId }) => {
    return (
        <section className="side-bar-container flex column">
             <div className="workspace-title flex row align-center">
                    <span className="letter flex">
                        <span>M</span>
                        <HomeIcon />
                    </span>
                    <span>Main workspace</span>
                </div>
            <div className="btns-container ">
                <button className="flex align-center side-bar-btns-width" onClick={toggleModal}><AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> Add </button>
                <button className="flex align-center side-bar-btns-width"><AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> Filters </button>
                <div className="flex side-bar-btns-width">
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                    <input placeholder="Search boards..." type="text" />
                </div>
            </div>
            <BoardList boards={boards} boardId={boardId}></BoardList>
        </section>
    )
}