import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";

export const BoardAdd = ({ toggleModal, onAdd, types }) => {
  const [board, setboard] = useState({
    title: "",
    cards: [],
    members: [],
    type: "items",
  });

  const inputHandler = (ev) => {
    const { value } = ev.target;
    const targetName = ev.target.name;
    const boardCopy = { ...board };
    switch (targetName) {
      case "title":
      case "type":
        boardCopy[targetName] = value;
        setboard({ ...boardCopy });
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex column align-center">
      <h1>Create board</h1>
      <input
        type="text"
        name="title"
        placeholder="New Board"
        value={board.title}
        onChange={inputHandler}
      />
      <button
        className="btn-x"
        onClick={(ev) => {
          toggleModal(ev);
        }}
      >
        X
      </button>
      <RadioGroup
        id="type-radiogroup"
        style={{ flexDirection: "row" }}
        defaultValue="Items"
        name="type"
        onChange={inputHandler}
      >
        {types.map((type,idx) => {
          return (
            <FormControlLabel key={idx} value={type} control={<Radio />} label={type} />
          );
        })}
      </RadioGroup>

      <button
        className="btn-cancel"
        onClick={(ev) => {
          toggleModal(ev);
        }}
      >
        Cancel
      </button>
      <button
        className="btn-add"
        onClick={(ev) => {
          onAdd(board, ev);
        }}
      >
        Create Board
      </button>
    </div>
  );
};
