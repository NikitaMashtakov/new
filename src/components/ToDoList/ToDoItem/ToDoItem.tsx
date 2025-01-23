import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// interface Props {
//   task: Task;
// }

export const ToDoItem = ({ id, text, isCompleted }: Task) => {
  return (
    <div id={id}>
      <FormControlLabel
        control={<Checkbox checked={isCompleted} />}
        label={text}
      />
    </div>
  );
};

export default ToDoItem;
