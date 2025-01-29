import { Dispatch, FC, SetStateAction, useState } from "react";
import { Task } from "../../../types/types";
import "./index.css";
import checkedIcon from "../../icons/checked";
import uncheckedIcon from "../../icons/unchecked";
import { Checkbox, FormControlLabel } from "@mui/material";
type Props = {
  task: Task;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};
export const TaskItem: FC<Props> = ({ task, setAllTasks }) => {
  const { id, text, isCompleted } = task;
  const [isChecked, setChecked] = useState(isCompleted);
  //const labelStyle = { textDecorationLine: isChecked ? "line-through" : "" };
  const handleCheck = (currentId: string) => {
    setChecked(!isChecked);
    setAllTasks((prevState) =>
      prevState.map((task) =>
        task.id === currentId
          ? { ...task, isCompleted: !isChecked }
          : { ...task }
      )
    );
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          icon={uncheckedIcon}
          checkedIcon={checkedIcon}
          checked={isChecked}
          onChange={() => {
            handleCheck(id);
          }}
        />
      }
      label={text}
      style={{ textOverflow: "ellipsis" }}
    />
  );
};

export default TaskItem;
{
  /* <div className="task-container" id={id}>
      <label
        style={{
          textDecorationLine: isChecked ? "line-through" : "",
          color: isChecked ? "#d9d9d9" : "",
        }}
      >
        {text}
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => {
            handleCheck(id);
          }}
        />
        <span className="checkmark"></span>
      </label>
    </div> */
}
