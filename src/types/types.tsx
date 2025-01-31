export type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type FilterType = "all" | "completed" | "active";
