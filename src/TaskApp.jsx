import { useReducer, useState } from "react";
import TaskList from "./Tasklist";
import AddTask from "./AddTask";
import tasksReducer from "./TasksReducer";
import { useTasksContext } from "./TasksProvider";

export default function TaskApp() {
  // Get the values of state and dispatch from the global context provided by custom hook
  const [state, dispatch] = useTasksContext();

  let nextId = 3;

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={state}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
