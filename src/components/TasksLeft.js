import { useSelector } from "react-redux";

const TasksLeft = () => {
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.isDone !== true)
  );

  return tasks.length ? (
    <div className="footer_text">
      <div className="tasks_left">{tasks.length}</div>
      <p>{tasks.length === 1 ? "task left" : "tasks left"}</p>
    </div>
  ) : (
    <p>No more tasks</p>
  );
};

export default TasksLeft;
