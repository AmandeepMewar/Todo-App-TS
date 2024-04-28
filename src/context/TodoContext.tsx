import { createContext, useContext, useEffect, useState } from "react";
import { TodoProps, TodoTypes, TodoContextProps } from "../types/Types";

const TodoContext = createContext<TodoContextProps | null>(null);

const defaultTodos: TodoTypes[] = [
  {
    todoId: "1111",
    todoTitle: "Getting Started with todos",
    todoDescription: "This is a sample todo description",
    todoCompleted: false,
    todoDate: "2024-04-28",
  },

  {
    todoId: "2222",
    todoTitle: "Add New Todos",
    todoDescription: "Add todos Description for New Todos",
    todoCompleted: false,
    todoDate: "2024-04-28",
  },
  {
    todoId: "3333",
    todoTitle: "Checkout my Github!",
    todoCompleted: false,
    todoDate: "2024-04-28",
  },
];

const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};

const TodoProvider = ({ children }: TodoProps) => {
  const [todos, setTodos] = useState<TodoTypes[]>(() => {
    const storedTodosString = localStorage.getItem("cachedTodos");
    const storedTodos = storedTodosString
      ? JSON.parse(storedTodosString)
      : null;
    return storedTodos || defaultTodos;
  });

  const AddTodos = (newTodo: TodoTypes) => {
    setTodos([...todos, newTodo]);
  };

  const DeleteTodos = (todoId: string | undefined) => {
    setTodos(todos.filter((todo) => todo.todoId !== todoId));
  };

  const ToggleTodoCompleted = (todoId: string | undefined) => {
    setTodos(
      todos.map((todo) => {
        if (todo.todoId === todoId) {
          return { ...todo, todoCompleted: !todo.todoCompleted };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("cachedTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, AddTodos, DeleteTodos, ToggleTodoCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodoContext, TodoProvider };
