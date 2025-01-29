import { Button } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FilterType, Task } from "../../types/types";
import "./index.css";
type Props = {
  itemsLeft: number;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  setTaskFilter: Dispatch<SetStateAction<FilterType>>;
};

const TaskFilter: FC<Props> = ({ itemsLeft, setAllTasks, setTaskFilter }) => {
  function handleClearButtonClick() {
    setAllTasks((prevState) =>
      prevState.filter((task) => task.isCompleted === false)
    );
  }
  const buttonStyles = {
    border: "1px solid #e9d9d8",
    padding: "2px 6px",
    width: "max-content",
    minWidth: "",
    fontWeight: "300",
    color: "#7f7f7f",
    display: "flex",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    textTransform: "none",
  };
  const clearButtonStyles = {
    ...buttonStyles,
    border: "1px solid rgba(233, 217, 216, 0)",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      border: "1px solid #e9d9d8",
    },
  };
  return (
    <div className="buttons-container">
      <div className="items-left">
        <span style={{ color: "#7f7f7f", fontWeight: "300" }}>
          {itemsLeft} items left
        </span>
      </div>
      <div className="filter-buttons-group">
        <Button
          sx={buttonStyles}
          onClick={() => {
            setTaskFilter("all");
          }}
        >
          All
        </Button>
        <Button
          sx={buttonStyles}
          onClick={() => {
            setTaskFilter("active");
          }}
        >
          Active
        </Button>
        <Button
          sx={buttonStyles}
          onClick={() => {
            setTaskFilter("completed");
          }}
        >
          Completed
        </Button>
      </div>
      <div className="clear-button">
        <Button sx={clearButtonStyles} onClick={handleClearButtonClick}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TaskFilter;
