import React from 'react'
import { TaskList } from '../task/cmps/TaskList'

export const GroupList = ({ groups }) => {
    return (
        <section className="group-list">
            {groups && groups.map((group) => {
                return (<div key={group._id}>
                    <span>{group.title}</span>
                    {/* <hr/> */}
                    <TaskList tasks={group.tasks} />
                </div>)
            })}
        </section>
    )
}
