import { useState } from "react";
import styles from "./Todos.module.scss";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useTodoContext } from "../../context/TodoContext";
import { MdDateRange } from "react-icons/md";

import { descriptionTypes } from "../../types/Types";

const Todos = () => {
  const { todos, DeleteTodos, ToggleTodoCompleted } = useTodoContext();
  const [showDescription, setShowDescription] = useState<descriptionTypes>({
    id: "",
    show: false,
  });

  const handleDescription = (id: string | undefined) => {
    if (showDescription.id === id) {
      setShowDescription({
        id: id,
        show: !showDescription.show,
      });
    } else {
      setShowDescription({
        id: id,
        show: true,
      });
    }
  };

  return (
    <div className={styles["todos-page"]}>
      {todos?.map((todo, i) => (
        <div className={styles["todo"]} key={i}>
          <div
            className={styles["todo-upper"]}
            style={{
              backgroundColor: todo.todoCompleted ? "#282a2e" : "#202122",
              textDecoration: todo.todoCompleted ? "line-through" : "none",
            }}
          >
            <div className={styles["left"]}>
              <button
                className={styles["checkbox"]}
                onClick={() => {
                  ToggleTodoCompleted(todo.todoId);
                  showDescription.show && handleDescription(todo.todoId);
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
              {!todo.todoCompleted && (
                <FaAngleDown
                  onClick={() => handleDescription(todo.todoId)}
                  className={`${styles["icon"]} ${
                    showDescription.id === todo.todoId && showDescription.show
                      ? styles["active"]
                      : ""
                  }`}
                />
              )}
              <MdDeleteForever
                className={styles["icon"]}
                onClick={() => {
                  DeleteTodos(todo.todoId);
                }}
              />
            </div>
          </div>
          {showDescription.id === todo.todoId && showDescription.show && (
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
