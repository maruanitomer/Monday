import { Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { utilService } from "../../../shared/services/utilService";

export const TaskUpdates = ({ task, onEditBoard, close }) => {
  const [comment, setComment] = useState(null);
  const onAddComment = () => {
    task.comments.unshift({ text: comment, _id: utilService.makeId() });
    onEditBoard();
  };
  const onDeleteComment = (id) => {
    task.comments = task.comments.filter((c) => c._id !== id);
    onEditBoard();
  };
  const inputHandler = (ev) => {
    setComment(ev.target.value);
  };

  const useStyles = makeStyles({

    p: {
      height: '100vh',
      position: 'absolute',
      right: '0%',
      top: '0%',
      backgroundColor: 'aliceblue',
    }
  });
  const classes = useStyles()
  return (
    <div className={'flex column ' + classes.p} style={{ height: "100vh"}}>
      <div className="flex column align-start">
        <button onClick={close}>x</button>
        <h1> {task.title}</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Write an update..."
          onChange={inputHandler}
        />
        <Button onClick={onAddComment}>Update</Button>
      </div>
      {task.comments.length === 0 ? (
        <span className="align-self-center">No updates yet...</span>
      ) : (
        task.comments.map((c) => (
          <div className="flex justify-space-around" key={c._id}>
            <span>{c.text}</span>
            <button onClick={() => onDeleteComment(c._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};
