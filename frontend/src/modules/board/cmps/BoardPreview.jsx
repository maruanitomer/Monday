import React from "react";
import { GroupList } from "../../group/cmps/GroupList";

export const BoardPreview = ({ groups, board }) => {
  return (
    <section>
      {/* <BoardNav /> */}
      <GroupList board={board} groups={groups} />
    </section>
  );
};
