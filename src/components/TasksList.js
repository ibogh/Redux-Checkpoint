import Task from "./Task";
import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <ul className="list" style={{ listSyle: "none" }}>
      {tasks.map((task, taskIdx) => (
        <li key={taskIdx} className="task_item">
          <Task
            id={task.id}
            description={task.description}
            isDone={task.isDone}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
