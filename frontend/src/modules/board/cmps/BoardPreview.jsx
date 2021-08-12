import React from "react";
import { GroupList } from "../../group";

export const BoardPreview = ({ groups, board, onEditBoard, onOpenUpdates }) => {
  return (
    <section>
      <GroupList
        board={board}
        onOpenUpdates={onOpenUpdates}
        onEditBoard={onEditBoard}
        groups={groups}
      />
    </section>
  );
};
