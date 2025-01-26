import React, { createContext, useState } from "react";
import { Task } from "../types/types";

export const TaskContext = createContext<Task[]>([]);

export const TaskListState = ({ children }: { children: React.ReactNode }) => {
  const [allTaskList, setAllTaskList] = useState();
};
