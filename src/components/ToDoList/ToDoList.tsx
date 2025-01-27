import FormGroup from "@mui/material/FormGroup";
import ToDoItem from "./ToDoItem/ToDoItem";
import { FilterType, Task } from "../../types/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  tasksFilter: FilterType;
};

export const ToDoList: React.FC<Props> = ({
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
    <ToDoItem
      key={task.id}
      task={task}
      allTasks={allTasks}
      setAllTasks={setAllTasks}
    />
  ));
  return <FormGroup>{taskListToShow}</FormGroup>;
};
