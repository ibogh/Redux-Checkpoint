import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../tasks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: tasks,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        description: action.payload.description,
        isDone: false,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].description = action.payload.description;
    },
    markDone: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].isDone = action.payload.isDone;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTask, editTask, markDone, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
