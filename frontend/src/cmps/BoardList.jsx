import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

export const BoardList = ({ boards, boardId }) => {

    return (
        <div className="board-list-wrapper">
            <div className="spacer">
            </div>
            {boards && <div className="board-list-container flex column align-start ">
                {boards.map((board) => {
                    var className = "flex align-center side-bar-btns-width"
                    var spanAndIconClassName = ""
                    if (!boardId) boardId = boards[0]._id
                    if (boardId === board._id) {
                        className += ' active'
                        spanAndIconClassName += ' span-active'
                    }
                    return (
                        <Link key={board._id} to={`/board/${board._id}`}>
                            <button className={className}>
                                <DashboardOutlinedIcon className={spanAndIconClassName}></DashboardOutlinedIcon>
                                <span className={spanAndIconClassName}>{board.title}</span>
                            </button>
                        </Link>)
                })}
            </div >}
            {!boards && <div className="flex column" style={{ 'padding': '10px' }}>
                <span>Workspace is empty</span>
                <span>Create or add boards</span>
            </div>}
        </div>)
}



//for backup

// {boards && <ul className="list">
// {boards.map((board) => {
//     return (
//         <li key={board._id} className="clean-list">
//             <Link to={`/board/${board._id}`}>
//                 {board.title}
//             </Link>
//         </li>)
// })}
// </ul >}