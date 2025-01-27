import { Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { FilterType, Task } from "../../types/types";
import "./index.css";
type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  setTaskFilter: Dispatch<SetStateAction<FilterType>>;
};

const TaskFilter: React.FC<Props> = ({
  allTasks,
  setAllTasks,
  setTaskFilter,
}) => {
  function handleClearButtonClick() {
    const updatedTaskList = allTasks.filter(
      (task) => task.isCompleted === false
    );
    setAllTasks(updatedTaskList);
  }
  const itemsLeftCount = allTasks.filter(
    (task) => task.isCompleted === false
  ).length;
  return (
    <div className="buttons-container">
      <div className="items-left">
        <span>{itemsLeftCount} items left</span>
      </div>
      <div className="filter-buttons-group">
        <Button
          sx={{
            border: "1px solid #e9d9d8",
            padding: "3px 3px",
            width: "max-content",
            minWidth: "",
          }}
          onClick={() => {
            setTaskFilter("all");
          }}
        >
          All
        </Button>
        <Button
          sx={{
            border: "1px solid #e9d9d8",
            padding: "3px 3px",
            width: "max-content",
            minWidth: "",
          }}
          onClick={() => {
            setTaskFilter("active");
          }}
        >
          Active
        </Button>
        <Button
          sx={{
            border: "1px solid #e9d9d8",
            padding: "3px 3px",
            width: "max-content",
            minWidth: "",
          }}
          onClick={() => {
            setTaskFilter("completed");
          }}
        >
          Completed
        </Button>
      </div>
      <div className="clear-button">
        <Button onClick={handleClearButtonClick}>Clear completed</Button>
      </div>
    </div>
  );
};

export default TaskFilter;
