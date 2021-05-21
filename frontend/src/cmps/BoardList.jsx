import React from 'react'
import { Link } from 'react-router-dom'
export const BoardList = ({ boards }) => {
    return (
        <section className="board-list-container">
            <ul className="list">
                {boards.map((board) => {
                    return (
                        <li key={board._id} className="clean-list">
                            <Link to={`/board/${board._id}`}>
                                {board.title}
                            </Link>
                        </li>)
                })}
            </ul >
            <div className="spacer">
            </div>
            {boards && <div className="flex column" style={{ 'padding':'10px'}}>
                <span>Workspace is empty</span>
                <span>Create or add boards</span>
            </div>}
        </section>)
}
