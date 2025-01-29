import { IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Task } from "../../types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};

const TaskInput: FC<Props> = ({ setAllTasks }) => {
  const [text, setText] = useState<string>("");
  function addTask(text: string) {
    if (text) {
      const newTask = {
        id: String(Date.now()),
        text: text,
        isCompleted: false,
      };
      setAllTasks((tasks) => [...tasks, newTask]);
      setText("");
    }
  }
  return (
    <Paper
      sx={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "0",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <KeyboardArrowDownIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 0,
          flex: 1,
          fontSize: "22px",
          fontWeight: "300",
          fontStyle: "italic",
        }}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask(text);
        }}
        //   inputProps={{ "aria-label": "" }}
      />
      {text && (
        <IconButton
          type="button"
          aria-label="add"
          id="add-button"
          onClick={() => addTask(text)}
        >
          <AddIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default TaskInput;
