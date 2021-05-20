import React from 'react'
import { Link } from 'react-router-dom'
export const BoardList = ({ boards }) => {
    return (
        // <Router>
        <ul>

            {boards.map((board) => {
                return (
                    <li key={board._id} className="clean-list">
                        <Link to={`/board/${board._id}`}>
                            {board.title}
                        </Link>
                    </li>)
            })}
        </ul >


    )
}
