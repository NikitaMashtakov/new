import { Button } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { FilterType, Task } from "../../types/types";
type Props = {
  itemsLeft: number;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
  tasksFilter: FilterType;
  setTaskFilter: Dispatch<SetStateAction<FilterType>>;
};
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
const buttonsContainerStyles = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "5px 10px",
  "@media(maxWidth: 850px)": {
    flexDirection: "column" as const,
  },
};
const itemsLeftStyles = {
  display: "flex",
  flex: "1",
  color: "#7f7f7f",
  fontWeight: "300",
};
const filterButtonsGroupStyles = {
  gap: "5px",
  display: "flex",
  flex: "2",
  flexDirection: "row" as const,
  justifyContent: "center",
};
const clearButtonBlockStyles = {
  display: "flex",
  flex: "1",
  justifyContent: "end",
};
const TaskFilter: FC<Props> = ({
  itemsLeft,
  setAllTasks,
  tasksFilter,
  setTaskFilter,
}) => {
  function handleClearButtonClick() {
    setAllTasks((prevState) =>
      prevState.filter((task) => task.isCompleted === false)
    );
  }
  return (
    <div style={buttonsContainerStyles}>
      <div style={itemsLeftStyles}>
        <span>{itemsLeft} items left</span>
      </div>
      <div style={filterButtonsGroupStyles}>
        <Button
          sx={
            tasksFilter === "all"
              ? { ...buttonStyles, backgroundColor: "#e7e7e7" }
              : buttonStyles
          }
          onClick={() => {
            setTaskFilter("all");
          }}
        >
          All
        </Button>
        <Button
          sx={
            tasksFilter === "active"
              ? { ...buttonStyles, backgroundColor: "#e7e7e7" }
              : buttonStyles
          }
          onClick={() => {
            setTaskFilter("active");
          }}
        >
          Active
        </Button>
        <Button
          sx={
            tasksFilter === "completed"
              ? { ...buttonStyles, backgroundColor: "#e7e7e7" }
              : buttonStyles
          }
          onClick={() => {
            setTaskFilter("completed");
          }}
        >
          Completed
        </Button>
      </div>
      <div style={clearButtonBlockStyles}>
        <Button sx={clearButtonStyles} onClick={handleClearButtonClick}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TaskFilter;
