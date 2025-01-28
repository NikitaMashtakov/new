import FormGroup from "@mui/material/FormGroup";
import TaskItem from "./TaskItem/TaskItem";
import { FilterType, Task } from "../../types/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  tasksFilter: FilterType;
};

export const TaskList: React.FC<Props> = ({
  allTasks,
  setAllTasks,
  tasksFilter,
}) => {
  let taskList;
  switch (tasksFilter) {
    case "all":
      taskList = allTasks.slice();
      break;
    case "completed":
      taskList = allTasks.filter((task) => task.isCompleted === true);
      break;
    case "active":
      taskList = allTasks.filter((task) => task.isCompleted === false);
      break;
  }
  const taskListToShow = taskList?.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      allTasks={allTasks}
      setAllTasks={setAllTasks}
    />
  ));
  return <FormGroup>{taskListToShow}</FormGroup>;
};
