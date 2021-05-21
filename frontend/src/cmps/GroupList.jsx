import React from 'react'
import { CardList } from './CardList'

export const GroupList = ({ groups }) => {
    return (
        <section className="group-list">
            {groups && groups.map((group) => {
                return (<div key={group._id}>
                    <span>{group.title}</span>
                    {/* <hr/> */}
                    <CardList cards={group.cards} />
                </div>)
            })}
        </section>
    )
}
