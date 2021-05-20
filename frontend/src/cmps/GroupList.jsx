import React from 'react'
import { CardList } from './CardList'

export const GroupList = ({ groups }) => {
    return (
        <div className="group-list">
            {groups.map((group) => {
                return (<div key={group._id}>
                    <h1>{group.title}</h1>
                    <hr/>
                    <CardList cards={group.cards} />
                    
                </div>)
            })}
        </div>
    )
}
