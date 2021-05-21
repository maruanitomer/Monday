import React, { useEffect, useState } from 'react'

export const BoardAdd = ({ toggleModal, onAdd }) => {
    const [board, setboard] = useState({
        title: '',
        cards: [],
        memembers: []
    })
    useEffect(() => {
        { setboard({ title: 'New Board' }) }
    }, [])
    return (
        <div className="flex column align-center">
            <h1>add</h1>
            <input placeholder="Board name.."></input>
            <button className="btn-x" onClick={(ev) => {
                ev.stopPropagation()
                ev.preventDefault()
                toggleModal()
            }}>X</button>
            <button className="btn-add" onClick={(ev) => {
                ev.stopPropagation()
                ev.preventDefault()
                onAdd(board)
            }}>Add</button>
        </div>
    )
}
