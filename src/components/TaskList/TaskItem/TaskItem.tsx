import { Dispatch, FC, SetStateAction, useState } from "react";
import { Task } from "../../../types/types";
import checkedIcon from "../../icons/checked";
import uncheckedIcon from "../../icons/unchecked";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
  task: Task;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};
const taskItemStyles = {
  borderBottom: "1px solid #d9d9d9",
  display: "flex",
  flex: "1",
  alignItems: "center",
};
const deleteButtonStyles = {
  width: "30px",
  height: "30px",
  padding: "5px 5px",
  marginRight: "5px",
  color: "#d9d9d9",
  "&:hover": {
    color: "#ff4d4d",
  },
};
const labelStyles = (isChecked: boolean) => {
  return {
    display: "flex",
    flex: "2",
    margin: "0",
    padding: "5px",
    textDecorationLine: isChecked ? "line-through" : "",
    color: isChecked ? "#d9d9d9" : "#4d4d4d",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
};

export const TaskItem: FC<Props> = ({ task, setAllTasks }) => {
  const { id, text, isCompleted } = task;
  const [isChecked, setChecked] = useState(isCompleted);
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
  const handleDelete = (deleteId: string) => {
    setAllTasks((prevState) =>
      prevState.filter((task) => task.id !== deleteId)
    );
  };

  return (
    <div className="task-item" style={taskItemStyles}>
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
        label={<p>{text}</p>}
        sx={labelStyles(isChecked)}
      />
      <IconButton
        id={id}
        type="button"
        aria-label="remove"
        sx={deleteButtonStyles}
        onClick={() => {
          handleDelete(id);
        }}
      >
        <ClearIcon />
      </IconButton>
    </div>
  );
};

export default TaskItem;
