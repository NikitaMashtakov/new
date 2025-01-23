import { FormControlLabel } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import ToDoItem from "./ToDoItem/ToDoItem";

interface Props {
  allTasks: [];
}

export const ToDoList = ({ allTasks }: Props) => {
  return (
    <FormGroup>
      {allTasks.map(({ id, text, isCompleted }) => (
        <ToDoItem id={id} text={text} isCompleted={isCompleted} />
      ))}
    </FormGroup>
  );
};
