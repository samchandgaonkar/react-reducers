import { createContext, useContext, useReducer, useState } from "react";
import TaskList from "./Tasklist";
import AddTask from "./AddTask";
import tasksReducer from "./TasksReducer";
import TaskApp from "./TaskApp";
import { TasksProvider } from "./TasksProvider";

function App() {
  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

export default App;
