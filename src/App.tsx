import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToDoList } from "./components/ToDoList/ToDoList";
import TaskContainer from "./components/TaskContainer/TaskContainer";

// const allTasks = [
//   { id: "1", text: "rewerwrw", isCompleted: false },
//   { id: "2", text: "fewfewfw", isCompleted: false },
//   { id: "3", text: "dsdsdsdsd", isCompleted: true },
// ];
function App() {
  return (
    <div className="App">
      <div className="header">todos</div>
      <TaskContainer />
    </div>
  );
}

export default App;
//
