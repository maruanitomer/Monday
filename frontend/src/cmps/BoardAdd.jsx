import { FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react'

export const BoardAdd = ({ toggleModal, onAdd }) => {
    const [board, setboard] = useState({
        title: 'New board',
        cards: [],
        members: [],
        type: 'items'
    })

    const inputHandler = (ev) => {
        const { value } = ev.target;
        // const { checked } = ev.target;
        const targetName = ev.target.name;
        const boardCopy = { ...board };
        switch (targetName) {
            // case 'price':
            //     toy[targetName] = +value;
            //     this.setState({ toy })
            //     break;
            // case 'inStock':
            //     toy.inStock = checked;
            //     this.setState({ toy })
            //     break;
            case 'title':
            case 'type':
                boardCopy[targetName] = value;
                setboard({ ...boardCopy })
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex column align-center">
            <h1>Create board</h1>
            <input type="text" name="title" placeholder="Board name.." value={board.title} onChange={inputHandler} />
            <button className="btn-x" onClick={(ev) => {
                toggleModal(ev)
            }}>X</button>
            <RadioGroup style={{ flexDirection: 'row' }} defaultValue="Items" name="type" onChange={inputHandler}>
                <FormControlLabel value="Items" control={<Radio />} label="Items" />
                <FormControlLabel value="Budgets" control={<Radio />} label="Budgets" />
                <FormControlLabel value="Employees" control={<Radio />} label="Employees" />
                <FormControlLabel value="Campaigns" control={<Radio />} label="Campaigns" />
                <FormControlLabel value="Leads" control={<Radio />} label="Leads" />
                <FormControlLabel value="Projects" control={<Radio />} label="Projects" />
                <FormControlLabel value="Creatives" control={<Radio />} label="Creatives" />
                <FormControlLabel value="Clients" control={<Radio />} label="Clients" />
                <FormControlLabel value="Tasks" control={<Radio />} label="Tasks" />
                {/* <FormControlLabel
                    value={board.type}
                    onChange={inputHandler}
                    control={<Radio name="type" />}
                    label={
                        <TextField
                            margin="normal"
                            onChange={inputHandler}
                        />
                    }
                />           */}
                  </RadioGroup>
            <button className="btn-cancel" onClick={(ev) => {
                toggleModal(ev)
            }}>Cancel</button>
            <button className="btn-add" onClick={(ev) => {
                onAdd(board, ev)
            }}>Create Board</button>
        </div>
    )
}
