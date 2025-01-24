import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Task } from "../../../types/types";

export const ToDoItem: React.FC<Task> = ({ id, text, isCompleted }) => {
  const [isChecked, setChecked] = useState(isCompleted);
  console.log("ischecked pre", isChecked);
  const handleChecked = (arg: boolean) => {
    setChecked(arg);
    isCompleted = isChecked;
    //event.target.checked = isChecked;
    console.log("isChecked", isChecked);

    console.log("isCompleted", isCompleted);
  };
  return (
    <div id={id}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={() => {
              setChecked(!isChecked);
              isCompleted = isChecked;
            }}
          />
        }
        label={text}
      />
    </div>
  );
};

export default ToDoItem;
