import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToDoList } from "./components/ToDoList/ToDoList";

const allTasks = [{ id: "1", text: "rewerwrw", isCompleted: false }];
function App() {
  return (
    <div className="App">
      <ToDoList allTasks={allTasks} />
    </div>
  );
}

export default App;
//
