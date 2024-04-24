import { createContext, useContext, useState } from "react";
import { TodoProps, TodoTypes } from "../types/Types";
const TodoContext = createContext();

const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};

const TodoProvider = ({ children }: TodoProps) => {
  const [todos, setsTodos] = useState<TodoTypes[]>([]);

  const HandleTodos = ({ title, description, option }) => {};
};

export { useTodoContext, TodoProvider };
