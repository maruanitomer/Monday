import { TaskList } from "../../task";

export const GroupPreview = ({ group, board }) => {
  return (
    <div >
      <div className="grid-tasks-layout">
        <span className="title">{group.title}</span>
        <span className="person">Person</span>
        <span className="status">Status</span>
        <span className="date">Date</span>
      </div>
      <TaskList board={board} group={group} tasks={group.tasks} />
    </div>
  );
};
