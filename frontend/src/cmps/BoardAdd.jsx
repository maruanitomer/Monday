import React, { useEffect, useState } from 'react'

export const BoardAdd = ({ toggleModal, onAdd }) => {
    const [board, setboard] = useState({
        title: '',
        cards: [],
        memembers: []
    })
    useEffect(() => {

        { setboard({ title: 'blue' }) }
    }, [])
    return (
        <div className="flex column align-center">
            <h1>add</h1>
            <input placeholder="Board name.."></input>
            <button className="btn-x" onClick={toggleModal}>X</button>
            <button className="btn-add" onClick={(ev) => {
                ev.stopPropagation()
                onAdd(board)
            }}>Add</button>
        </div>
    )
}
