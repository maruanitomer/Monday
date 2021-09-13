import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import { userService } from "../../user/service/userService";

export const BoardAdd = ({ toggleModal, onAdd, types }) => {
  const [board, setboard] = useState({
    title: "",
    cards: [],
    members: [],
    groups: [],
    type: "items",
    description: "Hello this is generic description, change me please",
    ownedBy: userService.getLoggedinUser().username,
  });

  const inputHandler = (ev) => {
    const { value } = ev.target;
    const targetName = ev.target.name;
    const boardCopy = { ...board };
    boardCopy[targetName] = value;
    setboard({ ...boardCopy });
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
        {types.map((type, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={type}
              control={<Radio />}
              label={type}
            />
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
