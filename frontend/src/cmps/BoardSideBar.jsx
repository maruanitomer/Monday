import { BoardList } from "./BoardList"

export const BoardSideBar = ({ boards }) => {
    console.log('boards::', boards);
    return (
        <section className="side-bar-container flex column">
            <div className="flex">
                {/* <img src="" alt="" /> */}
                <span>Main workspace</span>
            </div>
            <input type="text" name="" id="" />
            <div>
                <span>+</span>
                <button>Add Board</button>
            </div>
            <BoardList boards={boards}></BoardList>
        </section>
    )
}