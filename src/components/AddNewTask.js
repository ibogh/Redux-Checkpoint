import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { FaPlus } from "react-icons/fa";

const AddNewTask = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    value
      ? dispatch(
          addTask({
            description: value,
          })
        ) && setValue("")
      : window.alert("Please enter your task");
  };

  return (
    <form className="task_input">
      <input
        type="text"
        name="description"
        value={value}
        placeholder="Add new task"
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="addBtn">
        <FaPlus className="btn_add" size={30} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default AddNewTask;
