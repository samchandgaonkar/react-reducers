import { useReducer, useState } from "react";
import TaskList from "./Tasklist";
import AddTask from "./AddTask";
import tasksReducer from "./TasksReducer";
import { useTasksContext } from "./TasksProvider";

let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Go To toilet", done: true },
//   { id: 1, text: "Drink Water", done: false },
//   { id: 2, text: "Take Shower", done: false },
// ];

export default function TaskApp() {
  //const [tasks, setTasks] = useState(initialTasks)
  const [state, dispatch] = useTasksContext();

  let nextId = 3;

  function handleAddTask(text) {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );dispatch({
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    // setTasks(tasks.filter((t) => t.id !== taskId));
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
