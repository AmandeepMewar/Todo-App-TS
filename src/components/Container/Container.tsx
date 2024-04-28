import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import Todos from "../Todos/Todos";

import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <div className={styles["header"]}>
          <Header />
        </div>

        <div className={styles["content"]}>
          <InputField />
          <div className={styles["todo-list"]}>
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
