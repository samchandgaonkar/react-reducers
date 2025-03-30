// This is a provider
// This creates a Global Context.
// Exports and Returns a Provider by wrapping received Children
// Exports the created Global Context in the form of a Custom React Hook, which can be invoked from the actual callee function.

import { createContext, useContext, useReducer } from "react";
import tasksReducer from "./TasksReducer";

const initialTasks = [
  { id: 0, text: "Go To toilet", done: true },
  { id: 1, text: "Drink Water", done: false },
  { id: 2, text: "Take Shower", done: false },
];

const TasksContext = createContext(initialTasks);

export const TasksProvider = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialTasks);

  //props.children is your TaskApp here -
  // Which will get the values state and Dispatch from TasksContext - redecorated as useTasksContext hook below
  return (
    <TasksContext.Provider value={[state, dispatch]}>
      {props.children} /
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
