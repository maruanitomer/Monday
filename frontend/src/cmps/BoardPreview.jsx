import React from 'react'
import { GroupList } from './GroupList'

export const BoardPreview = ({ board }) => {
    return (
        <div className="board-list-container">
            {/* <BoardNav /> */}
            <GroupList groups={board.groups} />
        </div >
    )
}
