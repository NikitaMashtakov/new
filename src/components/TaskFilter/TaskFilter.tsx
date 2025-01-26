import { Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Task } from "../../types/types";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<
    SetStateAction<{ id: string; text: string; isCompleted: boolean }[]>
  >;
};

const TaskFilter: React.FC<Props> = ({ allTasks, setAllTasks }) => {
  return (
    <div>
      <div className="tasks-count">
        <span>2 items left</span>
      </div>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
      <Button>Clear completed</Button>
    </div>
  );
};

export default TaskFilter;
