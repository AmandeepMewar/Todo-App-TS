import { useState } from "react";
import styles from "./Todos.module.scss";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useTodoContext } from "../../context/TodoContext";
import { MdDateRange } from "react-icons/md";

const Todos = () => {
  const { todos, DeleteTodos, ToggleTodoCompleted } = useTodoContext();

  return (
    <div className={styles["todos-page"]}>
      {todos?.map((todo, i) => (
        <div className={styles["todo"]}>
          <div
            key={i}
            className={styles["todo-upper"]}
            style={{
              backgroundColor: todo.todoCompleted ? "#343a40" : "#202122",
              textDecoration: todo.todoCompleted ? "line-through" : "none",
            }}
          >
            <div className={styles["left"]}>
              <button
                className={styles["checkbox"]}
                onClick={() => {
                  ToggleTodoCompleted(todo.todoId);
                }}
              >
                {todo.todoCompleted ? (
                  <FaRegCheckCircle className={styles["checkbox__logo"]} />
                ) : (
                  <FaRegCircle className={styles["checkbox__logo"]} />
                )}
              </button>
              {todo.todoTitle}
            </div>
            <div className={styles["right"]}>
              <FaAngleDown
                onClick={() => ToggleTodoCompleted(todo.todoId)}
                className={`${styles["icon"]} ${
                  todo.todoCompleted ? styles["active"] : ""
                }`}
              />
              <MdDeleteForever
                className={styles["icon"]}
                onClick={() => {
                  DeleteTodos(todo.todoId);
                }}
              />
            </div>
          </div>
          {todo.todoCompleted && (
            <div className={styles["todo-lower"]}>
              <p>{todo.todoDescription}</p>
              <p className={styles["date"]}>
                {todo.todoDate} <MdDateRange />
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;
