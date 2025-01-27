import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../../../types/types";
type Props = {
  task: Task;
  allTasks: Array<Task>;
  setAllTasks: Dispatch<
    SetStateAction<{ id: string; text: string; isCompleted: boolean }[]>
  >;
};
export const ToDoItem: React.FC<Props> = ({ task, allTasks, setAllTasks }) => {
  const { id, text, isCompleted } = task;
  const [isChecked, setChecked] = useState(isCompleted);
  const labelStyle = isChecked ? "" : `textDecorationLine: "line-through"`;
  const handleCheck = (id: string) => {
    // setChecked(!isChecked);
    // console.log(isChecked);
    setChecked(!isChecked);
    const updatedTaskIndex = allTasks.findIndex(({ id }) => id === task.id);
    if (updatedTaskIndex > -1) {
      const newAllTasks = allTasks.slice();
      newAllTasks[updatedTaskIndex] = {
        ...newAllTasks[updatedTaskIndex],
        isCompleted: !isChecked,
      };
      setAllTasks(newAllTasks);
    }
  };
  //task.isCompleted = isChecked; //будет useContext completeTask
  //event.target.checked = isChecked;
  // console.log("isChecked", isChecked);

  // console.log("isCompleted", isCompleted);

  return (
    <div id={id}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={isChecked}
            onChange={() => {
              handleCheck(id);
            }}
          />
        }
        label={text}
        style={{ labelStyle }}
      />
    </div>
  );
};

export default ToDoItem;
