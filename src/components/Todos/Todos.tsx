import { useState } from "react";
import styles from "./Todos.module.scss";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

const Todos = () => {
  const [todos, setTodos] = useState<string[] | null>([
    "Getting an invite for dinner",
    "11AM meeting",
    "Do research",
  ]);

  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className={styles["todos-page"]}>
      {todos?.map((todo, i) => (
        <div key={i} className={styles["todo"]}>
          <div className={styles["left"]}>
            <button
              className={styles["checkbox"]}
              onClick={() => setCheck((p) => !p)}
            >
              {check ? (
                <FaRegCheckCircle className={styles["checkbox__logo"]} />
              ) : (
                <FaRegCircle className={styles["checkbox__logo"]} />
              )}
            </button>
            {todo}
          </div>
          <div className={styles["right"]}>
            <SlOptions />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
