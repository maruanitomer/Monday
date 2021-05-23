import React from 'react'
import { GroupList } from '../../group/GroupList'

export const BoardPreview = ({ board }) => {
    return (
        <section className="board-list-wrapper">
            {/* <BoardNav /> */}
            <GroupList groups={board.groups} />
        </section >
    )
}
