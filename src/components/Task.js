import { useDispatch } from "react-redux";
import { markDone, deleteTask, editTask } from "../redux/taskSlice";
import { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimesCircle } from "react-icons/fa";

const Todo = ({ id, description, isDone }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(description);

  const dispatch = useDispatch();

  const handleIsDone = () => {
    dispatch(markDone({ id: id, isDone: !isDone }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEdit = () => {
    dispatch(editTask({ id: id, description: value }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setValue(description);
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <>
      <label htmlFor="checkbox" className="checkbox">
        <input
          type="checkbox"
          name="isDone"
          checked={isDone ? "checked" : ""}
          onChange={handleIsDone}
        />
        <svg
          width="32"
          height="32"
          viewBox="-4 -4 39 39"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            className="checkbox__bg"
            width="35"
            height="35"
            x="-2"
            y="-2"
            fill="none"
            strokeWidth="3"
            rx="6"
            ry="6"
          ></rect>
          <polyline
            className="checkbox__checkmark"
            points="4,14 12,23 28,5"
            stroke="transparent"
            strokeWidth="4"
            fill="none"
          ></polyline>
        </svg>
      </label>
      {editMode ? (
        <div className="item_editable">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div className="task_buttons">
            <FaSave className="btn_save" size={20} onClick={handleEdit} />
            <FaTimesCircle
              className="btn_cancel"
              size={20}
              onClick={handleCancel}
            />
          </div>
        </div>
      ) : (
        <div className="item_editable">
          <p className="description">{description}</p>
          <div className="task_buttons">
            <FaEdit className="btn_edit" size={20} onClick={toggleEditMode} />
            <FaTrash className="btn_delete" size={16} onClick={handleDelete} />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
