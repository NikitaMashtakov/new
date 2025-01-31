import FormGroup from "@mui/material/FormGroup";
import TaskItem from "./TaskItem/TaskItem";
import { FilterType, Task } from "../../types/types";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  tasksFilter: FilterType;
};

export const TaskList: FC<Props> = ({ allTasks, setAllTasks, tasksFilter }) => {
  return (
    <FormGroup>
      {allTasks
        .filter((task) =>
          tasksFilter === "active"
            ? task.isCompleted === false
            : tasksFilter === "completed"
            ? task.isCompleted === true
            : true
        )
        .map((task) => (
          <TaskItem key={task.id} task={task} setAllTasks={setAllTasks} />
        ))}
    </FormGroup>
  );
};
