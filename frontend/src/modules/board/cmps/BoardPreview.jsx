import React from "react";
import { GroupList } from "../../group/GroupList";

export const BoardPreview = ({ groups, board }) => {
  return (
    <section className="board-list-wrapper">
      {/* <BoardNav /> */}
      <GroupList board={board} groups={groups} />
    </section>
  );
};
