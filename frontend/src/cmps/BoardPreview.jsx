import React from 'react'
import { GroupList } from './GroupList'

export const BoardPreview = ({ board }) => {
    return (
        <div className="board-container">
            {/* <BoardNav /> */}
            <GroupList groups={board.groups} />
        </div >
    )
}
