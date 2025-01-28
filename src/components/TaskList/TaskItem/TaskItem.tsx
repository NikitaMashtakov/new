import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../../../types/types";
import "./index.css";
type Props = {
  task: Task;
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};
export const TaskItem: React.FC<Props> = ({ task, allTasks, setAllTasks }) => {
  const { id, text, isCompleted } = task;
  const [isChecked, setChecked] = useState(isCompleted);
  //const labelStyle = { textDecorationLine: isChecked ? "line-through" : "" };
  const handleCheck = (id: string) => {
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

  return (
    <div className="task-container" id={id}>
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
    </div>
  );
};

export default TaskItem;
