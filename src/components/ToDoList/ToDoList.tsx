import { FormControlLabel } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import ToDoItem from "./ToDoItem/ToDoItem";
import { Task } from "../../types/types";

type Props = {
  allTasks: Array<Task>;
};

export const ToDoList: React.FC<Props> = ({ allTasks }) => {
  return (
    <FormGroup>
      {allTasks.map(({ id, text, isCompleted }) => (
        <ToDoItem key={id} id={id} text={text} isCompleted={isCompleted} />
      ))}
    </FormGroup>
  );
};
