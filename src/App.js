import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TasksLeft from "./components/TasksLeft";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>DO TOW -Todolist</h1>
      <div className="tasks_container">
        <div className="content">
          <div className="add_task_form">
            <AddNewTask />
          </div>
          <TasksList />
        </div>
        <div className="footer">
          <TasksLeft />
        </div>
      </div>
    </div>
  );
}

export default App;
