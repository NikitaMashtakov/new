import { useState } from "react";
import { ToDoList } from "../ToDoList/ToDoList";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskInput from "../TaskInput/TaskInput";
import { FilterType } from "../../types/types";
import "./index.css";
const initTasks = [
  { id: "1", text: "rewerwrw", isCompleted: false },
  { id: "2", text: "fewfewfw", isCompleted: false },
  { id: "3", text: "dsdsdsdsd", isCompleted: true },
];

const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState(initTasks);
  const [tasksFilter, setTasksFilter] = useState<FilterType>("all");

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <TaskInput allTasks={allTasks} setAllTasks={setAllTasks} />
      <ToDoList
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        tasksFilter={tasksFilter}
      />
      <TaskFilter
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        setTaskFilter={setTasksFilter}
      />
    </div>
  );
};

export default TaskContainer;
