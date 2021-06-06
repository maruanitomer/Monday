import React from "react";
import { GroupPreview } from "./GroupPreview";

export const GroupList = ({ groups, board }) => {
  return (
    <section className="group-list-wrapper">
      {groups &&
        groups.map((group) => {
          return (
            <GroupPreview
              key={group._id}
              board={board}
              group={group}
            ></GroupPreview>
          );
        })}
    </section>
  );
};
