import React from 'react'

export const CardList = ({ cards }) => {
    return (<ul>
        <li className="clean-list">
            {cards.map((card) => {
                return (
                    <div key={card._id}>
                        <p >{card.title}</p>
                        {card.members.map((member) => {
                            return <p key={member._id}>{member.fullname}</p>
                        })}
                    </div>)
            })}
        </li>
    </ul>
    )
}
