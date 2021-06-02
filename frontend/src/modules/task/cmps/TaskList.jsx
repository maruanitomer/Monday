import React from "react";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

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
