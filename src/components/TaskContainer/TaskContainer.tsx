import React, { useState } from "react";
import { ToDoList } from "../ToDoList/ToDoList";
import TaskFilter from "../TaskFilter/TaskFilter";
import { Input } from "@mui/material";
import TaskInput from "../TaskInput/TaskInput";
const initTasks = [
  { id: "1", text: "rewerwrw", isCompleted: false },
  { id: "2", text: "fewfewfw", isCompleted: false },
  { id: "3", text: "dsdsdsdsd", isCompleted: true },
];
type FilterType = "all" | "completed" | "active";
const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState(initTasks);
  const [tasksFilter, setTasksFilter] = useState<FilterType>("all");

  return (
    <div style={{ width: "60%" }}>
      <TaskInput allTasks={allTasks} setAllTasks={setAllTasks} />
      <ToDoList allTasks={allTasks} setAllTasks={setAllTasks} />
      <TaskFilter allTasks={allTasks} setAllTasks={setAllTasks} />
    </div>
  );
};

export default TaskContainer;
