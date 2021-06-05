import React from "react";
import { GroupList } from "../../group";

export const BoardPreview = ({ groups, board }) => {
  return (
    <section>
      {/* <BoardNav /> */}
      <GroupList board={board} groups={groups} />
    </section>
  );
};
