import { ReactNode } from "react";

export type TodoTypes = {
  todoTitle: string;
  todoDescription: string;
  option: boolean;
};

export type TodoProps = {
  children: ReactNode;
};
