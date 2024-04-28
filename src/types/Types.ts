import { ReactNode } from "react";

export type TodoTypes = {
  todoId?: string;
  todoTitle: string;
  todoDescription?: string;
  todoCompleted?: boolean;
  todoDate?: string;
};

export type descriptionTypes = {
  id: string | undefined;
  show: boolean;
};

export type TodoProps = {
  children: ReactNode;
};

export type TodoContextProps = {
  todos: TodoTypes[];
  setTodos: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
  AddTodos: (newTodo: TodoTypes) => void;
  DeleteTodos: (todoId: string | undefined) => void;
  ToggleTodoCompleted: (todoId: string | undefined) => void;
};
