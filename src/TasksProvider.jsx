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

  return (
    <TasksContext.Provider value={[state, dispatch]}>
      {props.children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
