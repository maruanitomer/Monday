import React from 'react'

export const TaskList = ({ tasks }) => {
    return (<ul>
        <li className="clean-list">
            {tasks.map((task) => {
                return (
                    <div key={task._id}>
                        <p >{task.title}</p>
                        {task.members.map((member) => {
                            return <p key={member._id}>{member.fullname}</p>
                        })}
                    </div>)
            })}
        </li>
    </ul>
    )
}
