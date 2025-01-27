import {
  Button,
  IconButton,
  Input,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../../types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  allTasks: Array<Task>;
  setAllTasks: Dispatch<SetStateAction<Task[]>>;
};

const TaskInput: React.FC<Props> = ({ allTasks, setAllTasks }) => {
  const [text, setText] = useState<string>("");
  function addTask(text: string) {
    const newTask = {
      id: String(Date.now()),
      text: text,
      isCompleted: false,
    };
    setAllTasks((tasks) => [...tasks, newTask]);
    setText("");
    console.log("allTasks", allTasks);
  }
  return (
    <div style={{ display: "flex" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <KeyboardArrowDownIcon />
        </IconButton>
        <InputBase
          multiline={true}
          sx={{ ml: 1, flex: 1 }}
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          // onKeyDown={(e) => {
          //   e.preventDefault();
          //   e.key === "Enter" && addTask(text);
          // }}
          //   inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          id="add-button"
          onClick={() => addTask(text)}
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default TaskInput;

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AddIcon from '@mui/icons-material/Add';import DirectionsIcon from '@mui/icons-material/Directions';

// export default function CustomizedInputBase() {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//         <KeyboardArrowDownIcon />
//       </IconButton>
//       <InputBase
//         multiline = {true}
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Google Maps"
//         inputProps={{ 'aria-label': 'search google maps' }}
//       />
//       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//         <AddIcon />
//       </IconButton>
//     </Paper>
//   );
// }

{
  /* <div style={{ display: "flex" }}>
      <TextField
        style={{ display: "flex", flex: "2" }}
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      <Button
        style={{ display: "flex" }}
        id="add-button"
        variant="outlined"
        onClick={() => addTask(text)}
      >
        v
      </Button>
    </div> */
}
