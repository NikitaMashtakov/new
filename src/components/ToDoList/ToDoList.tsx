import { FormControlLabel } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import ToDoItem from "./ToDoItem/ToDoItem";
import { Task } from "../../types/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};

export const ToDoList: React.FC<Props> = ({ allTasks, setAllTasks }) => {
  const taskList = allTasks.map((task) => (
    <ToDoItem
      key={task.id}
      task={task}
      allTasks={allTasks}
      setAllTasks={setAllTasks}
    />
  ));
  return <FormGroup>{taskList}</FormGroup>;
};
