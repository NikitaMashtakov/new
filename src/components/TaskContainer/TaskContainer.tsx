import { FC, useMemo, useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskInput from "../TaskInput/TaskInput";
import { FilterType } from "../../types/types";
const initTasks = [
  { id: "1", text: "Тестовое задание", isCompleted: false },
  { id: "2", text: "Прекрасный код", isCompleted: true },
  { id: "3", text: "Покрытие тестами", isCompleted: false },
];

const TaskContainer: FC = () => {
  const [allTasks, setAllTasks] = useState(initTasks);
  const [tasksFilter, setTasksFilter] = useState<FilterType>("all");
  const itemsLeft = useMemo(
    () => allTasks.filter((task) => task.isCompleted === false).length,
    [allTasks]
  );
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 3px 0px #b9b9b9",
      }}
    >
      <TaskInput setAllTasks={setAllTasks} />
      <TaskList
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        tasksFilter={tasksFilter}
      />
      <TaskFilter
        itemsLeft={itemsLeft}
        setAllTasks={setAllTasks}
        tasksFilter={tasksFilter}
        setTaskFilter={setTasksFilter}
      />
    </div>
  );
};

export default TaskContainer;
