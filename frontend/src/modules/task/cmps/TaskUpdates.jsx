import { Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import RichTextEditor from "../../../shared/cmps/RichTextEditor";
import { utilService } from "../../../shared/services/utilService";

export const TaskUpdates = ({ task, onEditBoard, close }) => {
  const onAddComment = (comment) => {
    task.comments.unshift({ text: comment, _id: utilService.makeId() });
    onEditBoard();
  };
  const onDeleteComment = (id) => {
    task.comments = task.comments.filter((c) => c._id !== id);
    onEditBoard();
  };

  const useStyles = makeStyles({

    style: {
      height: '100vh',
      position: 'absolute',
      right: '0%',
      top: '0%',
      backgroundColor: 'aliceblue',
      width: '30vw'
    }
  });
  const classes = useStyles()
  return (
    <div className={'comments-wrapper flex column ' + classes.style} style={{ height: "100vh" }}>
      <div className="flex column align-start">
        <button onClick={close}>x</button>
        <h1 style={{ margin: '0 auto' }}> {task.title}</h1>
      </div>
      <div className="flex column">
        {/* <input
          type="text"
          placeholder="Write an update..."
          onChange={inputHandler}
        /> */}
        <RichTextEditor onAddComment={onAddComment} />
      </div>
      {task.comments.length === 0 ? (
        <span className="align-self-center">No updates yet...</span>
      ) : (
        task.comments.map((c) => (
          <div className="flex justify-space-around" key={c._id}>
            <div
              dangerouslySetInnerHTML={{
                __html: c.text
              }}></div>
            <button onClick={() => onDeleteComment(c._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};
