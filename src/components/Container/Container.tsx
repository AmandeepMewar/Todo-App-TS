import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import Todos from "../Todos/Todos";

import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <Header />
        <div className={styles["content"]}>
          <InputField />
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default Container;
