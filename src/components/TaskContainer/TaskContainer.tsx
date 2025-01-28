import { useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskInput from "../TaskInput/TaskInput";
import { FilterType } from "../../types/types";
import "./index.css";
const initTasks = [
  { id: "1", text: "Тестовое задание", isCompleted: false },
  { id: "2", text: "Прекрасный код", isCompleted: true },
  { id: "3", text: "Покрытие тестами", isCompleted: false },
];

const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState(initTasks);
  const [tasksFilter, setTasksFilter] = useState<FilterType>("all");

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <TaskInput allTasks={allTasks} setAllTasks={setAllTasks} />
      <TaskList
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
