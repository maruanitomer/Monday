import React from "react";
import { GroupList } from "../../group";

export const BoardPreview = ({ groups, board, onEditBoard }) => {
  return (
    <section>
      {/* <BoardNav /> */}
      <GroupList board={board} onEditBoard={onEditBoard} groups={groups} />
    </section>
  );
};
